const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../database/crawData.hublot.json');
const outputPath = path.join(__dirname, '../src/lib/hublot_products.json');

const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

function cleanDescription(html) {
  if (!html) return '';
  return html
    .replace(/<a\b[^>]*>(.*?)<\/a>/gis, '$1')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&ndash;/gi, '–')
    .replace(/&mdash;/gi, '—')
    .replace(/&trade;/gi, '™')
    .replace(/&copy;/gi, '©')
    .replace(/theempire\.vn/gi, 'kennyluxury.vn')
    .replace(/The Empire/gi, 'Kenny Luxury')
    .replace(/\\\\n/g, ' ')
    .replace(/\\n/g, ' ')
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseShortDesc(shortDesc) {
  const result = {};
  if (!shortDesc) return result;
  const lines = shortDesc
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  lines.forEach((l) => {
    const parts = l.split(/[:：]/);
    if (parts.length > 1) {
      const key = parts[0].replace(/^[–\-•*\s]+/, '').trim().toLowerCase();
      const val = parts.slice(1).join(':').trim();
      if (key.includes('mã')) result.ref = val;
      else if (key.includes('kích thước')) result.size = val;
      else if (key.includes('bộ máy') || key.includes('chuyển động')) result.movement = val;
      else if (key.includes('dây')) result.bracelet = val;
      else if (key.includes('vỏ')) result.material = val;
    }
  });
  return result;
}

function extractWaterResistance(text, collection) {
  const m = text.match(/(?:chống nước|kháng nước)[^\.]*?(\d+\s*(?:mét|met|m|ATM|bar))/i);
  if (m) return m[1].replace(/met|mét/i, 'm');
  if (collection === 'Big Bang' || collection === 'Spirit of Big Bang') return '100 m';
  return '50 m';
}

const seenSlugs = new Set();
const hublotProducts = [];

rawData.forEach((item, index) => {
  const parsed = parseShortDesc(item.shortDescription);
  const breadcrumbsStr = (item.breadcrumbs || []).join(' > ');

  // Determine Collection
  let collection = 'Big Bang';
  if (breadcrumbsStr.includes('Spirit of Big bang')) {
    collection = 'Spirit of Big Bang';
  } else if (breadcrumbsStr.includes('Classic Fusion') || item.collection === 'Classic Fusion') {
    collection = 'Classic Fusion';
  }

  // Format Name: ensure "Hublot " prefix
  let rawName = (item.title || item.name || '').trim();
  let name = rawName;
  if (!name.toLowerCase().startsWith('hublot')) {
    name = `Hublot ${name}`;
  }
  name = name.replace(/\s+/g, ' ');

  // Slug
  let slug = (item.slug || '').trim();
  if (!slug) {
    slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  if (seenSlugs.has(slug)) {
    slug = `${slug}-${index + 1}`;
  }
  seenSlugs.add(slug);

  const id = slug.startsWith('hublot-') ? slug : `hublot-${slug}`;

  // Reference Number
  let ref = parsed.ref || (item.referenceNumber || '').trim();
  if (!ref) {
    const refMatch = rawName.match(/\b([0-9]{3}\.[A-Z0-9\.]+[A-Z0-9]{2,})\b/i);
    if (refMatch) ref = refMatch[1];
  }

  // Price & Stock Status
  const price = typeof item.price === 'number' && item.price > 0 ? item.price : 0;
  const stockStatus = 'in_stock';

  // Images
  const imageList = [];
  if (item.thumbnail && item.thumbnail.startsWith('http')) {
    imageList.push(item.thumbnail);
  }
  if (Array.isArray(item.galleryImages)) {
    item.galleryImages.forEach((img) => {
      if (img && img.startsWith('http') && !imageList.includes(img)) {
        imageList.push(img);
      }
    });
  }
  if (imageList.length === 0) {
    imageList.push('https://theempire.vn/wp-content/uploads/woocommerce-placeholder.png');
  }

  // Size fallback
  let size = parsed.size;
  if (!size) {
    const sizeMatch = rawName.match(/(\d{2,3})\s*mm/i);
    if (sizeMatch) size = `${sizeMatch[1]} mm`;
    else size = '42 mm';
  }

  // Specs
  const specs = {
    caseSize: size,
    caseMaterial: parsed.material || 'Vàng 18k / Titanium cao cấp',
    movement: parsed.movement ? (parsed.movement.toLowerCase().startsWith('hub') ? `Tự động Calibre ${parsed.movement}` : parsed.movement) : 'Tự động Automatic Calibre Hublot',
    braceletMaterial: parsed.bracelet || 'Dây cao su cao cấp',
    waterResistance: extractWaterResistance((item.description || '') + ' ' + (item.shortDescription || ''), collection),
    condition: 'Mới 100% Fullbox',
    year: '2024 - 2026',
  };

  // Clean description
  let desc = cleanDescription(item.description);
  if (!desc || desc.length < 50) {
    desc = cleanDescription(item.shortDescription) || `${name} thuộc bộ sưu tập ${collection} đỉnh cao của thương hiệu Hublot, biểu tượng của triết lý Art of Fusion đẳng cấp thế giới tại showroom Kenny Luxury.`;
  }

  hublotProducts.push({
    id,
    name,
    slug,
    brand: 'Hublot',
    collection,
    referenceNumber: ref,
    price,
    stockStatus,
    images: imageList,
    specs,
    description: desc,
  });
});

fs.writeFileSync(outputPath, JSON.stringify(hublotProducts, null, 2), 'utf8');

console.log(`Successfully converted ${hublotProducts.length} Hublot products!`);
const summary = {};
hublotProducts.forEach((p) => {
  summary[p.collection] = (summary[p.collection] || 0) + 1;
});
console.log('Collection breakdown:', summary);
