import { Product, CollectionInfo } from "@/types";
import apProductsJson from "./ap_products.json";

export const BRANDS = [
  { name: "Rolex", slug: "rolex", count: 32 },
  { name: "Audemars Piguet", slug: "audemars-piguet", count: 179 },
  { name: "Patek Philippe", slug: "patek-philippe", count: 18 },
  { name: "Richard Mille", slug: "richard-mille", count: 12 },
  { name: "Hublot", slug: "hublot", count: 24 },
  { name: "Franck Muller", slug: "franck-muller", count: 10 },
];

export const COLLECTIONS: Record<string, CollectionInfo> = {
  "yacht-master": {
    name: "Yacht-Master",
    slug: "yacht-master",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Yacht-Master là hiện thân của phong cách sống thượng lưu trên những du thuyền sang trọng. Tuyệt tác này nổi bật với vành bezel xoay hai chiều sở hữu các chữ số đúc nổi 3D tinh xảo – dấu ấn nhận diện độc tôn của bộ sưu tập của Rolex. Sự kết hợp giữa các chất liệu quý hiếm như vàng khối, hay đặc biệt là Rolesium (Thép và Bạch kim), đã tạo nên một vẻ đẹp vừa thể thao phóng khoáng, vừa lịch lãm vương giả. Đây chính là chiếc đồng hồ dành cho những vị thuyền trưởng hào hoa, người khao khát nắm giữ thời gian giữa biển trời bao la. Hãy cùng chiêm ngưỡng bộ sưu tập tại Kenny Luxury.",
    totalProducts: 20,
  },
  submariner: {
    name: "Submariner",
    slug: "submariner",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Dòng đồng hồ thợ lặn huyền thoại định hình tiêu chuẩn vượt thời gian. Độ bền bỉ tuyệt đối cùng phong cách thể thao lịch lãm.",
    totalProducts: 16,
  },
  daytona: {
    name: "Cosmograph Daytona",
    slug: "daytona",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Biểu tượng tốc độ gắn liền với giải đua huyền thoại. Kiệt tác bấm giờ cơ khí đỉnh cao dành cho giới sưu tầm xa xỉ.",
    totalProducts: 14,
  },
  "code-11-59": {
    name: "Code 11.59",
    slug: "code-11-59",
    brandName: "Audemars Piguet",
    brandSlug: "audemars-piguet",
    description:
      "Code 11.59 by Audemars Piguet là sự giao thoa hoàn mỹ giữa nghệ thuật chế tác Haute Horlogerie truyền thống và cấu trúc hình học đa tầng tương lai với vành bát giác ẩn mình dưới nắp sapphire vòm kép độc bản.",
    totalProducts: 77,
  },
  "code-11:59": {
    name: "Code 11.59",
    slug: "code-11-59",
    brandName: "Audemars Piguet",
    brandSlug: "audemars-piguet",
    description:
      "Code 11.59 by Audemars Piguet là sự giao thoa hoàn mỹ giữa nghệ thuật chế tác Haute Horlogerie truyền thống và cấu trúc hình học đa tầng tương lai.",
    totalProducts: 77,
  },
  "royal-oak": {
    name: "Royal Oak",
    slug: "royal-oak",
    brandName: "Audemars Piguet",
    brandSlug: "audemars-piguet",
    description:
      "Huyền thoại bất hủ định hình ngành đồng hồ thể thao xa xỉ thế giới từ năm 1972 của bậc thầy Gérald Genta. Nổi bật với vành bezel bát giác, 8 ốc vít lục giác và mặt số vân 'Grande Tapisserie' kinh điển.",
    totalProducts: 61,
  },
  "royal-oak-concept": {
    name: "Royal Oak Concept",
    slug: "royal-oak-concept",
    brandName: "Audemars Piguet",
    brandSlug: "audemars-piguet",
    description:
      "Đỉnh cao của kiến trúc vi cơ học tương lai và vật liệu công nghệ cao. Royal Oak Concept là sàn diễn của những cỗ máy Flying Tourbillon siêu phức tạp, Titanium, Forged Carbon và các dự án siêu phẩm toàn cầu.",
    totalProducts: 22,
  },
  "royal-oak-offshore": {
    name: "Royal Oak Offshore",
    slug: "royal-oak-offshore",
    brandName: "Audemars Piguet",
    brandSlug: "audemars-piguet",
    description:
      "Phiên bản thể thao mạnh mẽ, cơ bắp và bứt phá mọi giới hạn của biểu tượng Royal Oak. Vỏ lớn 42mm - 44mm, họa tiết Méga Tapisserie, nút bấm gốm ceramic và khả năng kháng nước bền bỉ.",
    totalProducts: 19,
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "rolex-126622-blue",
    name: "Đồng Hồ Rolex Yacht Master 40 126622-0002 Mặt Số Xanh",
    slug: "dong-ho-rolex-yacht-master-40-126622-0002-mat-so-xanh",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "126622-0002",
    price: 280000000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
    ],
    specs: {
      caseSize: "40 mm",
      caseMaterial: "Rolesium (Thép Oystersteel và Bạch kim)",
      dialColor: "Xanh dương chải tia (Sunray Blue)",
      bezel: "Bạch kim xoay 2 chiều, khắc vạch chia 60 phút dập nổi",
      movement: "Tự động Calibre 3235, trữ cót 70 giờ",
      braceletMaterial: "Oystersteel, 3 mắt phẳng",
      waterResistance: "100 m / 330 feet",
      year: "2024",
      condition: "Mới 100% Fullset",
    },
    description:
      "Rolex Yacht-Master 40 mã hiệu 126622 mặt số xanh thanh lịch, kết hợp hoàn hảo giữa chất liệu thép Oystersteel siêu bền và vành bezel bạch kim nguyên khối quý giá. Kim giây màu xanh lam nổi bật tạo điểm nhấn thể thao sang trọng.",
  },
  {
    id: "rolex-268622-rhodium",
    name: "Đồng Hồ Rolex Yacht-Master 37 268622-0002 Mặt Số Rhodium",
    slug: "dong-ho-rolex-yacht-master-37-268622-0002-mat-so-rhodium",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "268622-0002",
    price: 252000000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-37-268622-0002-Mat-So-Rhodium-800x800.png",
    ],
    specs: {
      caseSize: "37 mm",
      caseMaterial: "Rolesium (Thép Oystersteel và Bạch kim)",
      dialColor: "Xám Rhodium (Slate)",
      bezel: "Bạch kim xoay 2 chiều đúc nổi 3D",
      movement: "Tự động Calibre 2236, trữ cót 55 giờ",
      braceletMaterial: "Oystersteel",
      waterResistance: "100 m",
      year: "2024",
      condition: "Mới 100%",
    },
    description:
      "Mẫu Yacht-Master 37mm kích thước hoàn hảo cho cổ tay vừa và nhỏ. Mặt số xám Slate quý phái hòa quyện cùng kim giây và dòng chữ Yacht-Master màu xanh lam ngọc quyến rũ.",
  },
  {
    id: "rolex-226659-black",
    name: "Đồng Hồ Rolex Yacht-Master 42 226659-0002 Mặt Số Đen",
    slug: "dong-ho-rolex-yacht-master-42-226659-0002-mat-so-den",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "226659-0002",
    price: 837000000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png",
    ],
    specs: {
      caseSize: "42 mm",
      caseMaterial: "Vàng trắng 18k (18 ct White Gold)",
      dialColor: "Đen tuyền",
      bezel: "Gốm Cerachrom đen mờ, xoay hai chiều",
      movement: "Tự động Calibre 3235",
      braceletMaterial: "Dây đeo cao su Oysterflex thể thao cao cấp",
      waterResistance: "100 m",
      year: "2024",
      condition: "Mới 100% Brand New",
    },
    description:
      "Tuyệt phẩm Yacht-Master 42mm đúc từ vàng trắng 18k nguyên khối, kết hợp vành bezel gốm Cerachrom đen mờ và dây đeo Oysterflex đệm khí độc quyền của Rolex.",
  },
  {
    id: "rolex-126621-chocolate",
    name: "Rolex Yacht-Master 40 126621-0001 Mặt Số Nâu Chocolate",
    slug: "rolex-yacht-master-40-126621-0001-mat-so-nau-chocolate",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "126621-0001",
    price: 444413000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126621-0001-Mat-So-Nau-Chocolate-800x800.png",
    ],
    specs: {
      caseSize: "40 mm",
      caseMaterial: "Everose Rolesor (Thép Oystersteel và Vàng hồng Everose 18k)",
      dialColor: "Nâu Chocolate sang trọng",
      bezel: "Vàng hồng Everose 18k đúc nổi",
      movement: "Tự động Calibre 3235",
      braceletMaterial: "Oyster 2 tông màu demi",
      waterResistance: "100 m",
      year: "2024",
      condition: "Mới 100%",
    },
    description:
      "Vẻ đẹp ấm áp vương giả với sự hòa trộn giữa vàng hồng Everose 18k độc quyền và mặt số màu chocolate quyến rũ.",
  },
  {
    id: "rolex-126622-rhodium-40",
    name: "Đồng Hồ Rolex Yacht-Master 40 126622-0001 Mặt Số Rhodium",
    slug: "dong-ho-rolex-yacht-master-40-126622-0001-mat-so-rhodium",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "126622-0001",
    price: 365000000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0001-Mat-So-Rhodium-800x800.png",
    ],
    specs: {
      caseSize: "40 mm",
      caseMaterial: "Rolesium (Thép và Bạch kim)",
      dialColor: "Xám Rhodium",
      bezel: "Bạch kim 950 đúc nổi",
      movement: "Calibre 3235",
      braceletMaterial: "Oystersteel",
      waterResistance: "100 m",
      year: "2024",
      condition: "Mới 100%",
    },
    description:
      "Phiên bản 40mm mặt xám Rhodium kinh điển được săn lùng hàng đầu của dòng Yacht-Master.",
  },
  {
    id: "rolex-126655-black-rose",
    name: "Rolex Yacht-Master 40 126655-0002 Vàng Hồng Mặt Đen",
    slug: "rolex-yacht-master-40-126655-0002-mat-so-den",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "126655-0002",
    price: 720000000,
    stockStatus: "in_stock",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126655-0002-Mat-So-Den-800x800.png",
    ],
    specs: {
      caseSize: "40 mm",
      caseMaterial: "Vàng hồng Everose 18k",
      dialColor: "Đen bóng",
      bezel: "Cerachrom gốm đen mờ",
      movement: "Calibre 3235",
      braceletMaterial: "Dây Oysterflex",
      waterResistance: "100 m",
      year: "2024",
      condition: "Mới 100%",
    },
    description:
      "Sự quyến rũ tột đỉnh giữa sắc vàng hồng Everose lấp lánh và dây đeo cao su thể thao Oysterflex bền bỉ.",
  },
  {
    id: "rolex-226658-yellow-gold",
    name: "Đồng Hồ Rolex Yacht-Master 42 226658-0001 Vàng Vàng 18k",
    slug: "dong-ho-rolex-yacht-master-42-226658-0001-mat-so-den",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "226658-0001",
    price: 795000000,
    stockStatus: "pre_order",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226658-0001-Mat-So-Den-800x800.png",
    ],
    specs: {
      caseSize: "42 mm",
      caseMaterial: "Vàng vàng 18k (18 ct Yellow Gold)",
      dialColor: "Đen",
      bezel: "Gốm Cerachrom đen xoay 2 chiều",
      movement: "Calibre 3235",
      braceletMaterial: "Oysterflex",
      waterResistance: "100 m",
      year: "2024",
      condition: "Đặt trước",
    },
    description:
      "Phiên bản quyền uy bằng vàng vàng 18k, kết hợp công nghệ chế tác gốm đỉnh cao của Rolex.",
  },
  {
    id: "rolex-116688-yacht-master-2",
    name: "Đồng Hồ Rolex Yacht-Master II 44 116688-0002 Vàng Khối",
    slug: "dong-ho-rolex-yacht-master-ii-44-116688-0002-mat-so-trang",
    brand: "Rolex",
    collection: "Yacht-Master",
    referenceNumber: "116688-0002",
    price: 1150000000,
    stockStatus: "pre_order",
    images: [
      "/images/watches/Dong-Ho-Rolex-Yacht-Master-II-44-116688-0002-Mat-So-Trang-800x800.png",
    ],
    specs: {
      caseSize: "44 mm",
      caseMaterial: "Vàng vàng 18k nguyên khối",
      dialColor: "Trắng tinh khôi",
      bezel: "Gốm xanh Cerachrom xoay Ring Command",
      movement: "Calibre 4161 đếm lùi Regatta",
      braceletMaterial: "Oyster vàng 18k",
      waterResistance: "100 m",
      year: "2024",
      condition: "Fullbox",
    },
    description:
      "Chiếc đồng hồ bấm giờ đếm ngược Regatta phức tạp bậc nhất của Rolex, biểu tượng kiêu hãnh của các thuyền trưởng đại dương.",
  },
  ...(apProductsJson as unknown as Product[]),
];
