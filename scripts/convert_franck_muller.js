const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../database/franck-muller_products_woocommerce.csv');
const outputPath = path.join(__dirname, '../src/lib/franck_muller_products.json');

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let insideQuotes = false;
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    if (char === '"' && insideQuotes && nextChar === '"') {
      currentVal += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentVal);
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentVal);
      if (currentRow.length > 1 || currentRow[0] !== '') rows.push(currentRow);
      currentRow = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    rows.push(currentRow);
  }
  return rows;
}

function toSlug(str) {
  return (str || '')
    .replace(/[đĐ]/g, "d").normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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
    .replace(/empireluxury\.vn/gi, 'kennyluxury.vn')
    .replace(/The Empire/gi, 'Kenny Luxury')
    .replace(/Empire Luxury/gi, 'Kenny Luxury')
    .replace(/\\\\n/g, ' ')
    .replace(/\\n/g, ' ')
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getCollection(it) {
  const name = it.Name;
  const sku = it.SKU;
  if (/crazy\s*hours/i.test(name) || /\bCH\b/.test(sku) || /\bCH\b/.test(name)) return 'Crazy Hours';
  if (/yachting/i.test(name) || /yachting/i.test(sku)) return 'Vanguard Yachting';
  if (/master\s*square/i.test(name)) return 'Master Square';
  if (/infinity/i.test(name)) return 'Infinity';
  if (it['Attribute 2 value(s)'].includes('Ladies') || /V\s*32/i.test(name) || /Lady/i.test(name)) return 'Vanguard Lady';
  if (it['Attribute 2 value(s)'].includes('Men') || /V\s*41/i.test(name)) return 'Vanguard Men';
  return 'Vanguard';
}

function getCaseSize(it) {
  const name = it.Name;
  if (/V\s*32/i.test(name) || /V32/i.test(name)) return '32 mm';
  if (/V\s*41/i.test(name) || /V41/i.test(name)) return '41 mm';
  if (/6002/i.test(name)) return '32.7 x 32.7 mm';
  if (/8041/i.test(name)) return '35 x 47 mm';
  const descMatch = it.Description.match(/(?:đường kính|kích thước|size)\s*(?:khoảng|là)?\s*(\d+(?:[.,]\d+)?\s*mm|\d+\s*x\s*\d+\s*mm)/i);
  if (descMatch) return descMatch[1].trim();
  return '32 mm';
}

function getCaseMaterial(it) {
  const text = (it.Name + ' ' + it.SKU + ' ' + it.Description).toLowerCase();
  let material = 'Thép không gỉ cao cấp';
  if (text.includes('vàng hồng') || text.includes('rose gold') || text.includes('king gold') || /\b5n\b/.test(it.SKU.toLowerCase())) {
    material = 'Vàng hồng 18k nguyên khối';
  } else if (text.includes('vàng trắng') || text.includes('white gold') || /\bog\b/.test(it.SKU.toLowerCase())) {
    material = 'Vàng trắng 18k nguyên khối';
  } else if (text.includes('titanium') || /\btt\b/.test(it.SKU.toLowerCase())) {
    material = 'Titanium công nghệ cao';
  }

  if (text.includes('kim cương') || text.includes('diamonds') || /\bcd\b/.test(it.SKU.toLowerCase()) || /\b1r\b/.test(it.SKU.toLowerCase())) {
    material += ' đính kim cương thiên nhiên';
  }
  return material;
}

function getDialColor(it) {
  const text = (it.Name + ' ' + it.SKU + ' ' + it.Description).toLowerCase();
  if (text.includes('color dreams') || text.includes('col drm')) return 'Color Dreams đa sắc';
  if (text.includes('pur drm')) return 'Color Dreams tím độc bản';
  if (text.includes('mặt số đen') || text.includes('cọc số đen') || /\bnr\b/.test(it.SKU.toLowerCase())) return 'Mặt số đen Sunray';
  if (text.includes('mặt số xanh') || /\bbl\b/.test(it.SKU.toLowerCase()) || /\bbu\b/.test(it.SKU.toLowerCase())) return 'Mặt số xanh hải quân';
  if (text.includes('mặt số đỏ') || text.includes('cọc số đỏ') || /\brs\b/.test(it.SKU.toLowerCase())) return 'Mặt số đỏ rực rỡ';
  if (text.includes('mặt số trắng') || text.includes('cọc số trắng') || /\bbc\b/.test(it.SKU.toLowerCase()) || text.includes('white')) return 'Mặt số trắng Opaline';
  if (text.includes('mặt số bạc')) return 'Mặt số bạc chải tia Guilloché';
  return 'Mặt số Guilloché kinh điển';
}

function getMovement(it) {
  const text = (it.Name + ' ' + it.SKU + ' ' + it.Description).toLowerCase();
  if (/crazy\s*hours/i.test(it.Name) || /\bch\b/i.test(it.SKU)) {
    return 'Bộ máy cơ phức tạp Crazy Hours nhảy giờ độc quyền';
  }
  if (text.includes('qz') || text.includes('quartz')) {
    return 'Bộ máy Quartz Thụy Sĩ cao cấp Calibre FM';
  }
  if (text.includes('chronograph') || text.includes('cc')) {
    return 'Bộ máy cơ bấm giờ tự động Automatic Chronograph Calibre FM';
  }
  return 'Bộ máy cơ tự động Automatic Calibre FM Thụy Sĩ';
}

function getBracelet(it) {
  const text = (it.Name + ' ' + it.SKU + ' ' + it.Description).toLowerCase();
  if (text.includes('cao su')) return 'Dây cao su tự nhiên thể thao cao cấp';
  if (text.includes('dây da')) return 'Dây da cá sấu may thủ công kết hợp mặt trong cao su';
  return 'Dây da cá sấu may thủ công cao cấp';
}

const csvData = fs.readFileSync(inputPath, 'utf8');
const rows = parseCSV(csvData);
const headers = rows[0];

const products = rows.slice(1).map((r, idx) => {
  const item = {};
  headers.forEach((h, i) => {
    item[h] = r[i] || '';
  });

  const collection = getCollection(item);
  const size = getCaseSize(item);
  const material = getCaseMaterial(item);
  const dial = getDialColor(item);
  const movement = getMovement(item);
  const bracelet = getBracelet(item);
  const waterRes = collection === 'Vanguard Yachting' ? '100 m' : '30 m';
  const desc = cleanDescription(item.Description) || cleanDescription(item['Short description']);

  let ref = item.SKU.trim();
  if (!ref || ['den', 'do', 'trang', 'xanh'].includes(ref.toLowerCase())) {
    const m = item.Name.match(/\b(V\s*\d+[^–\-(]+)/i);
    ref = m ? m[1].trim() : (collection + ' ' + size);
  }

  const slug = toSlug(item.Name);
  const id = `franck-muller-${toSlug(ref)}-${idx + 1}`;

  const images = item.Images.split(',')
    .map((img) => img.trim())
    .filter(Boolean);

  let price = 0;
  if (item['Regular price']) {
    const p = parseFloat(item['Regular price'].replace(/[^0-9.]/g, ''));
    if (!isNaN(p) && p > 0) price = p;
  }

  return {
    id,
    name: item.Name.trim(),
    slug,
    brand: 'Franck Muller',
    collection,
    referenceNumber: ref,
    price,
    stockStatus: item['In stock?'] === '1' ? 'in_stock' : 'pre_order',
    images,
    specs: {
      caseSize: size,
      caseMaterial: material,
      dialColor: dial,
      bezel: material.includes('kim cương') ? 'Đính kim cương thiên nhiên tinh xảo' : 'Đánh bóng hoàn thiện thủ công',
      movement,
      braceletMaterial: bracelet,
      waterResistance: waterRes,
      condition: 'Mới 100% Fullbox',
    },
    description: desc,
  };
});

fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Converted ${products.length} Franck Muller products to ${outputPath}`);

const collCounts = {};
products.forEach((p) => {
  collCounts[p.collection] = (collCounts[p.collection] || 0) + 1;
});
console.log('Collections breakdown:', collCounts);
