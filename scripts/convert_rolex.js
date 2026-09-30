const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../database/rolex_products_woocommerce.csv');
const outputPath = path.join(__dirname, '../src/lib/rolex_products.json');

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
  const name = it.Name || '';
  const cat = it.Categories || '';
  const attr2 = it['Attribute 2 value(s)'] || '';

  if (attr2 && attr2 !== 'ROLEX') return attr2.trim();

  if (/yacht-master\s*ii/i.test(name) || /yacht-master\s*ii/i.test(cat)) return 'Yacht-Master II';
  if (/yacht-master/i.test(name) || /yacht-master/i.test(cat)) return 'Yacht-Master';
  if (/sky-dweller/i.test(name) || /sky-dweller/i.test(cat)) return 'Sky-Dweller';
  if (/gmt-master\s*ii/i.test(name) || /gmt-master/i.test(cat) || /gmt master/i.test(name)) return 'GMT-Master II';
  if (/sea-dweller/i.test(name) || /sea-dweller/i.test(cat)) return 'Sea-Dweller';
  if (/deepsea/i.test(name) || /deepsea/i.test(cat)) return 'Deepsea';
  if (/submariner/i.test(name) || /submariner/i.test(cat)) return 'Submariner';
  if (/daytona/i.test(name) || /daytona/i.test(cat)) return 'Cosmograph Daytona';
  if (/day-date/i.test(name) || /day-date/i.test(cat) || /day date/i.test(name)) return 'Day-Date';
  if (/lady-datejust/i.test(name) || /lady-datejust/i.test(cat)) return 'Lady-Datejust';
  if (/datejust/i.test(name) || /datejust/i.test(cat)) return 'Datejust';
  if (/oyster\s*perpetual/i.test(name) || /oyster perpetual/i.test(cat)) return 'Oyster Perpetual';
  if (/air-king/i.test(name) || /air king/i.test(name)) return 'Air-King';
  if (/explorer/i.test(name) || /explorer/i.test(cat)) return 'Explorer';
  if (/milgauss/i.test(name)) return 'Milgauss';
  if (/cellini/i.test(name)) return 'Cellini';
  if (/1908/i.test(name)) return '1908';

  return 'Rolex';
}

function getCaseSize(it) {
  const name = it.Name || '';
  const desc = it.Description || '';
  const m = name.match(/\b(28|31|34|36|37|39|40|41|42|43|44)\b/i) || desc.match(/(?:kích thước|đường kính|vỏ)\s*(?:khoảng\s*)?(28|31|34|36|37|39|40|41|42|43|44)\s*mm/i);
  if (m) return m[1] + ' mm';
  return '40 mm';
}

function getCaseMaterial(it) {
  const text = (it.Name + ' ' + it.Description).toLowerCase();
  if (text.includes('vàng trắng') || text.includes('white gold') || text.includes('white rolesor')) return 'Vàng trắng 18k / Thép Oystersteel';
  if (text.includes('vàng hồng') || text.includes('everose') || text.includes('pink gold')) return 'Vàng hồng Everose 18k';
  if (text.includes('vàng vàng') || text.includes('yellow gold') || text.includes('yellow rolesor')) return 'Vàng vàng 18k / Thép Oystersteel';
  if (text.includes('bạch kim') || text.includes('platinum')) return 'Bạch kim 950 (Platinum)';
  if (text.includes('titanium') || text.includes('RLX')) return 'Titanium RLX';
  return 'Thép không gỉ Oystersteel';
}

function getDialColor(it) {
  const text = (it.Name + ' ' + it.Description).toLowerCase();
  if (text.includes('thiên thạch') || text.includes('meteorite')) return 'Đá thiên thạch Meteorite';
  if (text.includes('xà cừ') || text.includes('mother of pearl') || text.includes('mop')) return 'Xà cừ tự nhiên Nacre';
  if (text.includes('mặt số xanh') || text.includes('blue') || text.includes('ice-blue') || text.includes('ice blue') || text.includes('olive')) return 'Xanh (Blue / Olive / Rhodium)';
  if (text.includes('mặt số đen') || text.includes('black')) return 'Đen sâu thẳm';
  if (text.includes('mặt số trắng') || text.includes('white') || text.includes('panda')) return 'Trắng sơn mài';
  if (text.includes('mặt số xám') || text.includes('grey') || text.includes('slate')) return 'Xám Slate / Rhodium';
  if (text.includes('mặt số hồng') || text.includes('pink')) return 'Hồng phấn Sundust';
  if (text.includes('mặt số sâm panh') || text.includes('champagne')) return 'Sâm panh (Champagne)';
  if (text.includes('mặt số nâu') || text.includes('chocolate')) return 'Nâu Chocolate';
  return 'Mặt số Rolex kinh điển';
}

function getMovement(it) {
  const text = (it.Name + ' ' + it.Description);
  const cal = text.match(/Calibre\s*([\d]{4})/i) || text.match(/Caliber\s*([\d]{4})/i);
  if (cal) return 'Tự động Calibre ' + cal[1] + ' Thụy Sĩ';
  return 'Tự động Automatic In-house Rolex';
}

function getBracelet(it) {
  const text = (it.Name + ' ' + it.Description).toLowerCase();
  if (text.includes('oysterflex')) return 'Dây cao su Oysterflex đệm khí độc quyền';
  if (text.includes('jubilee')) return 'Dây Jubilee 5 mối nối';
  if (text.includes('president')) return 'Dây President 3 mối nối tròn';
  if (text.includes('oyster')) return 'Dây Oyster 3 mối nối phẳng';
  if (text.includes('dây da')) return 'Dây da cao cấp';
  return 'Dây Oyster ba mối nối';
}

const csvData = fs.readFileSync(inputPath, 'utf8');
const rows = parseCSV(csvData);
const headers = rows[0].map(h => h.replace(/^\uFEFF/, '').trim());

const seenSlugs = new Set();
const products = [];

rows.slice(1).forEach((r, idx) => {
  const item = {};
  headers.forEach((h, i) => {
    item[h] = r[i] || '';
  });

  if (!item.Name) return;

  const collection = getCollection(item);
  const size = getCaseSize(item);
  const material = getCaseMaterial(item);
  const dial = getDialColor(item);
  const movement = getMovement(item);
  const bracelet = getBracelet(item);
  const desc = cleanDescription(item.Description) || cleanDescription(item['Short description']);

  let ref = item.SKU.trim();
  const mRef = item.Name.match(/([0-9]{5,6}[A-Z]*-[0-9]{4})/i) || item.Name.match(/\b([0-9]{5,6}[A-Z]*)\b/i);
  if (mRef) ref = mRef[1];

  let baseSlug = item.SKU ? toSlug(item.SKU) : toSlug(item.Name);
  if (!baseSlug) baseSlug = `rolex-${idx + 1}`;
  let slug = baseSlug;
  let counter = 1;
  while (seenSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }
  seenSlugs.add(slug);

  const images = item.Images.split(',')
    .map((img) => img.trim())
    .filter(Boolean);

  let price = 0;
  if (item['Regular price']) {
    const p = parseFloat(item['Regular price'].replace(/[^0-9.]/g, ''));
    if (!isNaN(p) && p > 0) price = p;
  }

  products.push({
    id: `rolex-${slug}`,
    name: item.Name.trim(),
    slug: slug,
    brand: 'Rolex',
    collection: collection,
    referenceNumber: ref,
    price: price,
    stockStatus: item['In stock?'] === '1' ? 'in_stock' : 'pre_order',
    images: images.length > 0 ? images : ['/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png'],
    specs: {
      caseSize: size,
      caseMaterial: material,
      dialColor: dial,
      bezel: 'Khía băm / Gốm Cerachrom / Xoay 2 chiều',
      movement: movement,
      braceletMaterial: bracelet,
      waterResistance: '100 m',
      condition: 'Mới 100% Fullbox',
    },
    description: desc,
  });
});

fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Successfully converted ${products.length} Rolex products to ${outputPath}`);

const collCounts = {};
products.forEach((p) => {
  collCounts[p.collection] = (collCounts[p.collection] || 0) + 1;
});
console.log('Rolex Collections breakdown:', collCounts);
