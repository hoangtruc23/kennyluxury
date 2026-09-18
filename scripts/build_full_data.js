const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentField = '';
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];
    if (c === '\"') {
      if (inQuotes && next === '\"') {
        currentField += '\"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push(currentField);
      currentField = '';
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      row.push(currentField);
      currentField = '';
      if (row.length > 1 || (row.length === 1 && row[0] !== '')) {
        lines.push(row);
      }
      row = [];
    } else {
      currentField += c;
    }
  }
  if (currentField || row.length > 0) {
    row.push(currentField);
    lines.push(row);
  }
  return lines;
}

function extractRefNumber(name, sku) {
  const match = name.match(/([0-9]{5}[A-Z0-9\.]+[A-Z0-9]{2})/i);
  if (match) return match[1];
  const skuMatch = sku.match(/([0-9]{5}[a-z0-9\.\-]+[a-z0-9]{2})$/i);
  if (skuMatch) return skuMatch[1].toUpperCase().replace(/-/g, '.');
  return sku;
}

function extractSpecs(name, desc, ref) {
  const full = name + ' ' + desc;
  
  // Case size
  let size = '41 mm';
  const nameSize = name.match(/\b(3[7-9]|4[0-8])\s*mm\b/i);
  if (nameSize) {
    size = nameSize[1] + ' mm';
  } else {
    const descSize = desc.match(/(?:kích thước|đường kính|vỏ)\s*(?:vỏ\s*)?(?:khoảng\s*)?(3[7-9]|4[0-8])\s*mm/i);
    if (descSize) size = descSize[1] + ' mm';
    else if (/\b77410\b/.test(full)) size = '38 mm';
    else if (/\b15210|26393|26394|26395|26396\b/.test(full)) size = '41 mm';
    else if (/\b26398|26620|26591\b/.test(full)) size = '42 mm';
    else if (/\b26420|26656\b/.test(full)) size = '43 mm';
    else if (/\b26605|26401|26402|26405|26587|26589|26650\b/.test(full)) size = '44 mm';
  }

  // Material
  let material = 'Vàng hồng 18k (Pink Gold)';
  const upperRef = ref.toUpperCase();
  if (upperRef.includes('BC')) material = 'Vàng trắng 18k (18 ct White Gold)';
  else if (upperRef.includes('OR')) material = 'Vàng hồng 18k (18 ct Pink Gold)';
  else if (upperRef.includes('BA')) material = 'Vàng vàng 18k (18 ct Yellow Gold)';
  else if (upperRef.includes('ST')) material = 'Thép không gỉ (Stainless Steel)';
  else if (upperRef.includes('TI')) material = 'Titanium siêu nhẹ cao cấp';
  else if (upperRef.includes('CE')) material = 'Ceramic đen công nghệ cao';
  else if (upperRef.includes('CB')) material = 'Ceramic trắng (White Ceramic)';
  else if (upperRef.includes('PT')) material = 'Bạch kim 950 (Platinum)';
  else if (upperRef.includes('CR')) material = 'Two-Tone: Vàng trắng 18k & Vàng hồng 18k';
  else if (upperRef.includes('NR')) material = 'Two-Tone: Vàng hồng 18k & Ceramic đen';
  else if (upperRef.includes('NB')) material = 'Two-Tone: Vàng trắng 18k & Ceramic đen';
  else if (upperRef.includes('QT')) material = 'Two-Tone: Thép không gỉ & Ceramic đen';
  else if (upperRef.includes('IP')) material = 'Titanium kết hợp Bạch kim 950';
  else if (upperRef.includes('OI')) material = 'Vàng hồng 18k & Titanium';
  else if (upperRef.includes('FA') || upperRef.includes('FO')) material = 'Carbon đúc (Forged Carbon) & Ceramic';

  // Movement
  let movement = 'Tự động In-house Calibre AP';
  const calMatch = full.match(/Calibre\s*([\w\d\/\#]+)/i) || full.match(/Caliber\s*([\w\d\/\#]+)/i);
  if (calMatch) {
    movement = 'Tự động Calibre ' + calMatch[1];
  } else if (/lên cót tay|manual/i.test(full)) {
    movement = 'Lên cót tay (Manual Winding)';
  }

  // Dial Color
  let dialColor = 'Đặc trưng Audemars Piguet';
  if (/xanh lá|xanh lục|green|khaki/i.test(full)) dialColor = 'Xanh lục (Smoked Green)';
  else if (/xanh dương|smoked blue|blue|bleu nuit/i.test(full)) dialColor = 'Xanh dương (Smoked Blue)';
  else if (/aventurine/i.test(full)) dialColor = 'Đá thiên văn Aventurine xanh';
  else if (/đen khói|smoked black|mặt số đen|black lacquer/i.test(full)) dialColor = 'Đen sơn mài (Black Lacquer)';
  else if (/màu ngà|ivory/i.test(full)) dialColor = 'Sơn mài màu ngà (Ivory)';
  else if (/beige|màu be|nâu cát/i.test(full)) dialColor = 'Beige dập nổi (Smoked Beige)';
  else if (/burgundy|đỏ tía|đỏ rượu/i.test(full)) dialColor = 'Đỏ tía (Smoked Burgundy)';
  else if (/tím|purple/i.test(full)) dialColor = 'Tím hoàng gia (Purple Lacquer)';
  else if (/trắng kem|white lacquer|mặt số trắng/i.test(full)) dialColor = 'Trắng sơn mài (White Lacquer)';
  else if (/xám|grey|rhodium|antraxit/i.test(full)) dialColor = 'Xám khói (Smoked Grey)';
  else if (/salmon|hồng cá hồi/i.test(full)) dialColor = 'Hồng cá hồi (Salmon)';
  else if (/openworked|skeleton|lộ cơ/i.test(full)) dialColor = 'Openworked Skeleton lộ cơ 3D';

  // Bracelet
  let bracelet = 'Dây da cá sấu cao cấp';
  if (/dây đeo cao su|dây cao su|rubber/i.test(full)) bracelet = 'Dây cao su cao cấp';
  else if (/dây vải bọc cao su|dây vải|rubber-coated/i.test(full)) bracelet = 'Dây vải dệt bọc cao su thể thao';
  else if (/dây kim loại|dây thép|vàng 18k|titanium/i.test(full) && /dây đeo (?:bằng )?(?:vàng|thép|titanium|titan|bạch kim)/i.test(full)) {
    bracelet = 'Dây kim loại đồng bộ với vỏ máy';
  }

  return {
    caseSize: size,
    caseMaterial: material,
    dialColor: dialColor,
    movement: movement,
    braceletMaterial: bracelet,
    waterResistance: /diver|300m|300 m/i.test(full) ? '300 m / 1000 ft' : (/100m|100 m/i.test(full) ? '100 m' : '30 m - 50 m'),
    condition: 'Mới 100% Fullbox',
    year: '2024 - 2026'
  };
}

function cleanDescription(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

const csvPath = '/Applications/MAMP/htdocs/ken/audemars-piguet.csv';
const csvContent = fs.readFileSync(csvPath, 'utf8');
const rows = parseCSV(csvContent).slice(1);

const apProducts = [];
const seenSlugs = new Set();

rows.forEach((r, idx) => {
  const sku = r[0].trim();
  const name = r[2].trim();
  const shortDesc = cleanDescription(r[6]);
  const fullDesc = cleanDescription(r[7]);
  const desc = shortDesc || fullDesc || name;
  const rawPrice = r[8].trim();
  const price = rawPrice ? parseInt(rawPrice, 10) : 0;
  const inStock = r[9].trim() === '1';
  let coll = r[18].trim();
  // Standardize collection name
  if (coll === 'Code 11:59') coll = 'Code 11.59';

  let slug = sku;
  if (seenSlugs.has(slug)) {
    slug = `${sku}-${idx + 1}`;
  }
  seenSlugs.add(slug);

  const images = r[12]
    ? r[12].split(',').map(s => s.trim()).filter(s => s.length > 0)
    : ['https://theempire.vn/wp-content/uploads/woocommerce-placeholder.png'];

  const ref = extractRefNumber(name, sku);
  const specs = extractSpecs(name, fullDesc, ref);

  apProducts.push({
    id: slug,
    name: name,
    slug: slug,
    brand: 'Audemars Piguet',
    collection: coll,
    referenceNumber: ref,
    price: price,
    stockStatus: inStock ? 'in_stock' : 'pre_order',
    images: images,
    specs: specs,
    description: desc
  });
});

console.log(`Generated ${apProducts.length} AP products.`);

// Now read existing data.ts to retain existing Rolex products
const dataTsPath = '/Applications/MAMP/htdocs/ken/kenny-luxury-nextjs/src/lib/data.ts';
const currentDataTs = fs.readFileSync(dataTsPath, 'utf8');

// Write a generated JSON file first for safety and fast access
const apJsonPath = '/Applications/MAMP/htdocs/ken/kenny-luxury-nextjs/src/lib/ap_products.json';
fs.writeFileSync(apJsonPath, JSON.stringify(apProducts, null, 2), 'utf8');
console.log('Saved ap_products.json successfully');

// Output summary
const counts = {};
apProducts.forEach(p => counts[p.collection] = (counts[p.collection] || 0) + 1);
console.log('Collections summary:', counts);
