import { Product, CollectionInfo } from "@/types";
import rolexProductsJson from "./rolex_products.json";
import apProductsJson from "./ap_products.json";
import rmProductsJson from "./rm_products.json";
import hublotProductsJson from "./hublot_products.json";
import patekProductsJson from "./patek_products.json";
import cartierProductsJson from "./cartier_products.json";
import franckMullerProductsJson from "./franck_muller_products.json";

export const BRANDS = [
  { name: "Rolex", slug: "rolex", count: 632 },
  { name: "Audemars Piguet", slug: "audemars-piguet", count: 179 },
  { name: "Patek Philippe", slug: "patek-philippe", count: 194 },
  { name: "Cartier", slug: "cartier", count: 200 },
  { name: "Richard Mille", slug: "richard-mille", count: 81 },
  { name: "Hublot", slug: "hublot", count: 163 },
  { name: "Franck Muller", slug: "franck-muller", count: 58 },
];

export const COLLECTIONS: Record<string, CollectionInfo> = {
  "yacht-master": {
    name: "Yacht-Master",
    slug: "yacht-master",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Yacht-Master là hiện thân của phong cách sống thượng lưu trên những du thuyền sang trọng. Tuyệt tác này nổi bật với vành bezel xoay hai chiều sở hữu các chữ số đúc nổi 3D tinh xảo – dấu ấn nhận diện độc tôn của bộ sưu tập của Rolex. Sự kết hợp giữa các chất liệu quý hiếm như vàng khối, hay đặc biệt là Rolesium (Thép và Bạch kim), đã tạo nên một vẻ đẹp vừa thể thao phóng khoáng, vừa lịch lãm vương giả.",
    totalProducts: 21,
  },
  submariner: {
    name: "Submariner",
    slug: "submariner",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Dòng đồng hồ thợ lặn huyền thoại định hình tiêu chuẩn vượt thời gian. Độ bền bỉ tuyệt đối cùng phong cách thể thao lịch lãm.",
    totalProducts: 9,
  },
  daytona: {
    name: "Cosmograph Daytona",
    slug: "daytona",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Biểu tượng tốc độ gắn liền với giải đua huyền thoại. Kiệt tác bấm giờ cơ khí đỉnh cao dành cho giới sưu tầm xa xỉ.",
    totalProducts: 29,
  },
  datejust: {
    name: "Datejust",
    slug: "datejust",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Biểu tượng của sự chuẩn mực, lịch lãm và đẳng cấp vượt thời gian. Datejust là bộ sưu tập đồng hồ cổ điển nổi tiếng bậc nhất thế giới.",
    totalProducts: 304,
  },
  "gmt-master-ii": {
    name: "GMT-Master II",
    slug: "gmt-master-ii",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Cỗ máy thời gian dành cho những người chinh phục không trung và hành trình xuyên lục địa. Khả năng hiển thị hai múi giờ song song với vành bezel Cerachrom hai màu trứ danh.",
    totalProducts: 14,
  },
  "day-date": {
    name: "Day-Date",
    slug: "day-date",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Đồng hồ của các vị tổng thống và nhà lãnh đạo kiệt xuất. Chế tác hoàn toàn bằng kim loại quý với cửa sổ hiển thị thứ viết tắt đầy đủ.",
    totalProducts: 124,
  },
  "lady-datejust": {
    name: "Lady-Datejust",
    slug: "lady-datejust",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Tuyệt tác trang sở hữu vẻ đẹp kiêu sa và thanh lịch dành riêng cho phái đẹp. Sự kết hợp hoàn hảo giữa kỹ thuật chế tác đỉnh cao và nghệ thuật nạm đá quý xa xỉ.",
    totalProducts: 81,
  },
  "sky-dweller": {
    name: "Sky-Dweller",
    slug: "sky-dweller",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Kiệt tác cơ khí phức tạp bậc nhất của Rolex dành cho những du khách toàn cầu. Tích hợp lịch thường niên Saros thông minh và hai múi giờ độc lập.",
    totalProducts: 39,
  },
  "sea-dweller": {
    name: "Sea-Dweller",
    slug: "sea-dweller",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Cỗ máy thợ lặn chuyên nghiệp vượt qua mọi giới hạn dưới lòng đại dương sâu thẳm. Trang bị van thoát khí Helium độc quyền.",
    totalProducts: 2,
  },
  "air-king": {
    name: "Air-King",
    slug: "air-king",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Tôn vinh những di sản hàng không huyền thoại. Thiết kế mặt số đen cá tính với kim giây màu xanh lá cây biểu tượng.",
    totalProducts: 1,
  },
  "land-dweller": {
    name: "Land Dweller",
    slug: "land-dweller",
    brandName: "Rolex",
    brandSlug: "rolex",
    description:
      "Bộ sưu tập đặc biệt dành cho những chuyến phiêu lưu khám phá phong cách sống đỉnh cao.",
    totalProducts: 8,
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
  "rm-011": {
    name: "RM 011",
    slug: "rm-011",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Biểu tượng Chronograph thể thao lừng danh gắn liền với đường đua F1. Vỏ Tonneau mạnh mẽ, bộ máy Flyback Chronograph Calibre RMAC1 và các vật liệu công nghệ cao NTPT Carbon, Ceramic & Red TPT.",
    totalProducts: 7,
  },
  "rm-07-01": {
    name: "RM 07-01",
    slug: "rm-07-01",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Tuyệt tác đồng hồ nữ xa hoa bậc nhất của Richard Mille. Đỉnh cao kỹ thuật nạm kim cương Snow-setting, gốm màu Pastel TZP ngọt ngào và Sapphire nguyên khối trong suốt.",
    totalProducts: 26,
  },
  "rm-030": {
    name: "RM 030",
    slug: "rm-030",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Đỉnh cao cơ cấu ly hợp ngắt rotor tự động (Declutchable Rotor) độc quyền, ngăn chặn sự lên dây cót quá mức và bảo vệ cỗ máy vận hành với độ chính xác tuyệt đối.",
    totalProducts: 7,
  },
  "rm-tourbillon": {
    name: "RM Tourbillon",
    slug: "rm-tourbillon",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Những tuyệt tác vi cơ khí phức tạp nhất thế giới: RM 027 Rafael Nadal, RM 43-01 Ferrari, RM 75-01 Sapphire... Triệt tiêu hoàn toàn tác động của trọng lực với khả năng chịu xung chấn phi thường.",
    totalProducts: 26,
  },
  "rm-sport": {
    name: "RM Sport & Lifestyle",
    slug: "rm-sport-lifestyle",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Các cỗ máy thể thao đỉnh cao: RM 65-01 Split-Seconds 36.000 vph, RM 67-02 siêu nhẹ 32g, RM 55-01 Bubba Watson, RM 72-01 In-house Chronograph và RM 63-02 Worldtimer.",
    totalProducts: 15,
  },
  "rm-sport-lifestyle": {
    name: "RM Sport & Lifestyle",
    slug: "rm-sport-lifestyle",
    brandName: "Richard Mille",
    brandSlug: "richard-mille",
    description:
      "Các cỗ máy thể thao đỉnh cao: RM 65-01 Split-Seconds 36.000 vph, RM 67-02 siêu nhẹ 32g, RM 55-01 Bubba Watson, RM 72-01 In-house Chronograph và RM 63-02 Worldtimer.",
    totalProducts: 15,
  },
  "big-bang": {
    name: "Big Bang",
    slug: "big-bang",
    brandName: "Hublot",
    brandSlug: "hublot",
    description:
      "Biểu tượng đột phá và linh hồn của triết lý 'Art of Fusion' từ Hublot. Big Bang gây ấn tượng với cấu trúc đa tầng sandwich táo bạo, vành bezel 6 ốc vít chữ H trứ danh cùng các chất liệu công nghệ cao như Magic Gold, King Gold và Ceramic.",
    totalProducts: 84,
  },
  "bigbang": {
    name: "Big Bang",
    slug: "big-bang",
    brandName: "Hublot",
    brandSlug: "hublot",
    description:
      "Biểu tượng đột phá và linh hồn của triết lý 'Art of Fusion' từ Hublot. Big Bang gây ấn tượng với cấu trúc đa tầng sandwich táo bạo, vành bezel 6 ốc vít chữ H trứ danh cùng các chất liệu công nghệ cao như Magic Gold, King Gold và Ceramic.",
    totalProducts: 84,
  },
  "classic-fusion": {
    name: "Classic Fusion",
    slug: "classic-fusion",
    brandName: "Hublot",
    brandSlug: "hublot",
    description:
      "Sự kết hợp hoàn hảo giữa nét thanh lịch cổ điển và phong cách đương đại tinh tế. Classic Fusion sở hữu thiết kế mỏng nhẹ, sang trọng với các đường nét tối giản, mặt số chải tia quý phái cùng sự hợp tác nghệ thuật đỉnh cao với nghệ sĩ Richard Orlinski.",
    totalProducts: 50,
  },
  "spirit-of-big-bang": {
    name: "Spirit of Big Bang",
    slug: "spirit-of-big-bang",
    brandName: "Hublot",
    brandSlug: "hublot",
    description:
      "Kiệt tác dáng Tonneau (thùng rượu) độc bản kế thừa toàn bộ DNA mạnh mẽ của dòng Big Bang. Vỏ cong ôm sát cổ tay kết hợp cùng các cỗ máy Skeleton lộ cơ tinh xảo, thể hiện kỹ nghệ vi cơ khí cơ bắp và đầy cuốn hút.",
    totalProducts: 29,
  },
  nautilus: {
    name: "Nautilus",
    slug: "nautilus",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Tuyệt tác kinh điển của huyền thoại Gérald Genta từ năm 1976. Biểu tượng tối thượng của phong cách thể thao thanh lịch với vành bezel bát giác bo tròn lấy cảm hứng từ ô cửa sổ du thuyền và mặt số sọc ngang dập nổi trứ danh.",
    totalProducts: 69,
  },
  aquanaut: {
    name: "Aquanaut",
    slug: "aquanaut",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Ra mắt năm 1997, Aquanaut là biểu tượng của tinh thần tự do và năng động đương đại. Mặt số vân nổi bàn cờ độc đáo kết hợp cùng dây đeo chất liệu composite nhiệt đới 'Tropical' siêu bền bỉ.",
    totalProducts: 23,
  },
  complications: {
    name: "Complications",
    slug: "complications",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Đỉnh cao chế tác cơ học phức tạp: Lịch thường niên Annual Calendar, Giờ thế giới World Time, Chronograph và Flyback... Đẳng cấp nghệ thuật vi cơ khí đỉnh cao Thụy Sĩ.",
    totalProducts: 48,
  },
  calatrava: {
    name: "Calatrava",
    slug: "calatrava",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Biểu tượng thanh lịch vĩnh cửu của Patek Philippe từ năm 1932. Vẻ đẹp hoàn mỹ của trường phái Bauhaus tối giản, tỷ lệ vàng chuẩn mực và sự tinh tế vượt thời gian.",
    totalProducts: 24,
  },
  "twenty-4": {
    name: "Twenty~4",
    slug: "twenty-4",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Hiện thân của vẻ đẹp nữ tính hiện đại và sang trọng vượt thời gian. Thiết kế dành riêng cho phái đẹp đồng hành từ ngày sang đêm với kỹ nghệ nạm kim cương hoàn mỹ.",
    totalProducts: 18,
  },
  "grand-complications": {
    name: "Grand Complications",
    slug: "grand-complications",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Đỉnh cao tột cùng của nghệ thuật Haute Horlogerie thế giới: Điểm chuông Minute Repeater, Lịch vạn niên Perpetual Calendar, Tourbillon và Thiên văn học Celestial.",
    totalProducts: 10,
  },
  "golden-ellipse": {
    name: "Golden Ellipse",
    slug: "golden-ellipse",
    brandName: "Patek Philippe",
    brandSlug: "patek-philippe",
    description:
      "Sự kết hợp hoàn hảo giữa hình chữ nhật và hình elip dựa trên tỷ lệ vàng 1 / 1.618033988. Tuyệt tác hình học bất đối xứng kinh điển của Patek Philippe từ năm 1968.",
    totalProducts: 2,
  },
  santos: {
    name: "Santos de Cartier",
    slug: "santos",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Chiếc đồng hồ đeo tay hiện đại đầu tiên trên thế giới ra mắt năm 1904 dành cho phi công Alberto Santos-Dumont. Vẻ đẹp hình học kinh điển với vành bezel đính ốc vít đặc trưng và các góc bo cong hoàn mỹ.",
    totalProducts: 46,
  },
  "santos-de-cartier": {
    name: "Santos de Cartier",
    slug: "santos",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Chiếc đồng hồ đeo tay hiện đại đầu tiên trên thế giới ra mắt năm 1904 dành cho phi công Alberto Santos-Dumont. Vẻ đẹp hình học kinh điển với vành bezel đính ốc vít đặc trưng và các góc bo cong hoàn mỹ.",
    totalProducts: 46,
  },
  tank: {
    name: "Tank",
    slug: "tank",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Tuyệt tác thiết kế hình chữ nhật bất hủ sáng tạo bởi Louis Cartier năm 1917, lấy cảm hứng từ những chiếc xe tăng Renault trong Thế chiến I. Biểu tượng thanh lịch thuần khiết vượt thời gian.",
    totalProducts: 60,
  },
  panthere: {
    name: "Panthère de Cartier",
    slug: "panthere",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Biểu tượng trang sức và đồng hồ đỉnh cao thập niên 1980. Sự kết hợp hoàn mỹ giữa kiệt tác kim hoàn và kỹ thuật chế tác đồng hồ, với dây đeo uốn lượn uyển chuyển tựa như bước chân loài báo gấm.",
    totalProducts: 45,
  },
  "panthere-de-cartier": {
    name: "Panthère de Cartier",
    slug: "panthere",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Biểu tượng trang sức và đồng hồ đỉnh cao thập niên 1980. Sự kết hợp hoàn mỹ giữa kiệt tác kim hoàn và kỹ thuật chế tác đồng hồ, với dây đeo uốn lượn uyển chuyển tựa như bước chân loài báo gấm.",
    totalProducts: 45,
  },
  baignoire: {
    name: "Baignoire",
    slug: "baignoire",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Kiệt tác hình elip thanh thoát tinh tế xuất hiện từ năm 1912. Đường cong duyên dáng ôm trọn cổ tay phái đẹp cùng nét quyến rũ vượt thời gian đậm chất Haute Joaillerie Paris.",
    totalProducts: 16,
  },
  "ballon-bleu": {
    name: "Ballon Bleu de Cartier",
    slug: "ballon-bleu",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Vẻ đẹp hình cầu mềm mại độc đáo với núm vặn sapphire xanh được bảo vệ bên trong vòm kim loại quý. Sự cân bằng hoàn hảo giữa nét cổ điển và phong cách đương đại.",
    totalProducts: 11,
  },
  "ballon-bleu-de-cartier": {
    name: "Ballon Bleu de Cartier",
    slug: "ballon-bleu",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Vẻ đẹp hình cầu mềm mại độc đáo với núm vặn sapphire xanh được bảo vệ bên trong vòm kim loại quý. Sự cân bằng hoàn hảo giữa nét cổ điển và phong cách đương đại.",
    totalProducts: 11,
  },
  tortue: {
    name: "Tortue",
    slug: "tortue",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Tuyệt tác hình mai rùa ra đời từ năm 1912, một trong những thiết kế vỏ đặc sắc và danh giá nhất của Cartier trong bộ sưu tập Privé danh giá.",
    totalProducts: 6,
  },
  crash: {
    name: "Crash",
    slug: "crash",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Huyền thoại nghệ thuật siêu thực London 1967. Đường nét vỏ uốn cong bất đối xứng đầy mê hoặc, là một trong những chiếc đồng hồ hiếm có và được săn đón nhất thế giới.",
    totalProducts: 4,
  },
  ronde: {
    name: "Ronde de Cartier",
    slug: "ronde",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Vẻ đẹp cổ điển trường tồn với mặt số tròn truyền thống, cọc số La Mã đồng tâm và kim nung xanh hình thanh kiếm đặc trưng của nhà kim hoàn Cartier.",
    totalProducts: 4,
  },
  "ronde-de-cartier": {
    name: "Ronde de Cartier",
    slug: "ronde",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Vẻ đẹp cổ điển trường tồn với mặt số tròn truyền thống, cọc số La Mã đồng tâm và kim nung xanh hình thanh kiếm đặc trưng của nhà kim hoàn Cartier.",
    totalProducts: 4,
  },
  roadster: {
    name: "Roadster",
    slug: "roadster",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Thiết kế lấy cảm hứng từ những chiếc xe thể thao cổ điển thập niên 1950 và 1960. Các đường cong cơ bắp mạnh mẽ cùng hệ thống thay dây tiện lợi đột phá.",
    totalProducts: 4,
  },
  clash: {
    name: "Clash [Un]limited",
    slug: "clash",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Tuyệt tác trang sức đồng hồ phá cách kết hợp giữa các hình khối đinh tán Clous de Paris, hạt cườm picot và cấu trúc chuyển động linh hoạt.",
    totalProducts: 3,
  },
  "clash-unlimited": {
    name: "Clash [Un]limited",
    slug: "clash",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Tuyệt tác trang sức đồng hồ phá cách kết hợp giữa các hình khối đinh tán Clous de Paris, hạt cườm picot và cấu trúc chuyển động linh hoạt.",
    totalProducts: 3,
  },
  cloche: {
    name: "Cloche de Cartier",
    slug: "cloche",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Thiết kế hình chuông độc đáo từ năm 1920 có thể đặt đứng trên bàn như một chiếc đồng hồ để bàn mini, thuộc bộ sưu tập Cartier Privé danh giá.",
    totalProducts: 1,
  },
  "cloche-de-cartier": {
    name: "Cloche de Cartier",
    slug: "cloche",
    brandName: "Cartier",
    brandSlug: "cartier",
    description:
      "Thiết kế hình chuông độc đáo từ năm 1920 có thể đặt đứng trên bàn như một chiếc đồng hồ để bàn mini, thuộc bộ sưu tập Cartier Privé danh giá.",
    totalProducts: 1,
  },
  "vanguard-lady": {
    name: "Vanguard Lady",
    slug: "vanguard-lady",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Bộ sưu tập biểu tượng tôn vinh vẻ đẹp kiêu sa và lộng lẫy của phái đẹp. Vỏ Tonneau uốn cong mềm mại ôm trọn cổ tay, cọc số Art Deco phóng khoáng cùng kỹ nghệ nạm kim cương tinh xảo bậc nhất.",
    totalProducts: 35,
  },
  "vanguard-men": {
    name: "Vanguard Men",
    slug: "vanguard-men",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Sức mạnh cơ bắp và phong thái đĩnh đạc của người đàn ông thành đạt. Thiết kế Tonneau V41 đậm chất thể thao tiên phong, cơ cấu chuyển động cơ khí Chronograph hoặc Ba Kim phức tạp.",
    totalProducts: 9,
  },
  "crazy-hours": {
    name: "Crazy Hours",
    slug: "crazy-hours",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Tuyệt phẩm đột phá thách thức mọi quy luật hiển thị thời gian truyền thống. Cọc số xáo trộn ngẫu hứng với kim giờ nhảy cóc kỳ diệu – biểu tượng đỉnh cao của triết lý sống tận hưởng từng khoảnh khắc tự do.",
    totalProducts: 6,
  },
  "vanguard-yachting": {
    name: "Vanguard Yachting",
    slug: "vanguard-yachting",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Lấy cảm hứng từ đại dương bao la và những chiếc siêu du thuyền xa hoa. Điểm nhấn mặt số hoa la bàn gió Wind Rose độc đáo cùng khả năng kháng nước 100m mạnh mẽ.",
    totalProducts: 6,
  },
  "master-square": {
    name: "Master Square",
    slug: "master-square",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Vẻ đẹp hình học vuông vắn hoàn mỹ của phong cách Art Deco thập niên 1920. Các cọc số La Mã đồng tâm phóng đại uyển chuyển trên mặt số guilloché trứ danh.",
    totalProducts: 1,
  },
  infinity: {
    name: "Infinity",
    slug: "infinity",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Đường cong duyên dáng và vẻ đẹp thanh thoát vô tận. Tuyệt tác chế tác kim hoàn và đồng hồ dạ tiệc cao cấp dành riêng cho những sự kiện thảm đỏ lộng lẫy.",
    totalProducts: 1,
  },
  vanguard: {
    name: "Vanguard",
    slug: "vanguard",
    brandName: "Franck Muller",
    brandSlug: "franck-muller",
    description:
      "Dòng đồng hồ biểu tượng lừng danh nhất của thương hiệu Franck Muller. Vỏ Tonneau khí động học kết hợp cùng kỹ nghệ chế tác Haute Horlogerie đỉnh cao từ Thụy Sĩ.",
    totalProducts: 50,
  },
};

export const PRODUCTS: Product[] = [
  ...(rolexProductsJson as unknown as Product[]),
  ...(apProductsJson as unknown as Product[]),
  ...(rmProductsJson as unknown as Product[]),
  ...(hublotProductsJson as unknown as Product[]),
  ...(patekProductsJson as unknown as Product[]),
  ...(cartierProductsJson as unknown as Product[]),
  ...(franckMullerProductsJson as unknown as Product[]),
];
