import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Award } from "lucide-react";

interface BrandStoryProps {
  brandName: string;
  brandSlug: string;
  tagline?: string;
  description?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
}

const BRAND_MOSAIC_IMAGES: Record<string, [string, string]> = {
  "audemars-piguet": [
    "https://theempire.vn/wp-content/uploads/2026/01/Audemars-Piguet-Code-11.59-By-Audermars-Piguet-Selfwinding-15210OR.OO_.A099CR.01.png",
    "https://theempire.vn/wp-content/uploads/2024/11/Audemars-Piquet-Royal-Oak-Flying-Tourbillon-41mm-1.png",
  ],
  "richard-mille": [
    "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-011-Felipe-Massa-Red-TPT-RM011.png",
    "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-030-Rose-Gold-RM030.png",
  ],
  "hublot": [
    "https://theempire.vn/wp-content/uploads/2024/12/Hublot-Big-Bang-Meca-10-King-Gold-45mm-414.OI_.1123.RX_-2.png",
    "https://theempire.vn/wp-content/uploads/2025/03/Hublot-Classic-Fusion-Aerofusion-Chronograph-Orlinski-King-Gold-Pave-45mm-525.OX_.0180.RX_.1704.ORL19-1.png",
  ],
  "rolex": [
    "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
    "/images/watches/Dong-Ho-Rolex-Yacht-Master-37-268622-0002-Mat-So-Rhodium-800x800.png",
  ],
  "patek-philippe": [
    "https://theempire.vn/wp-content/uploads/2026/01/Dong-ho-Patek-Philippe-Ladies-Nautilus-Rose-Gold-35.2mm-7118-1450R-001-Mat-So-Kim-Cuong-.png",
    "https://theempire.vn/wp-content/uploads/2026/01/Patek-Philippe-Aquanaut-42.2mm-5168G-001-Mat-So-Xanh-.png",
  ],
  "cartier": [
    "https://empireluxury.vn/wp-content/uploads/2023/12/dong-ho-cartier-santos-de-cartier-chronograph-43-3mm-crwssa0017-1.png",
    "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-tank-americaine-rose-gold-silver-dial-15-2mm-wjta0057-4.png",
  ],
  "franck-muller": [
    "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-crazy-hours-v-32-ch-d-5n-nr-2-1.jpg",
    "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-vanguard-v-41-cc-dt-yachting-ac-bl-7.jpg",
  ],
};

const BRAND_FEATURE_BADGES: Record<string, { badge1: string; badge2: string; badge3: string }> = {
  "rolex": {
    badge1: "Di sản hơn 119 năm chế tác Thụy Sĩ",
    badge2: "Chuẩn mực chính xác Superlative Chronometer",
    badge3: "Vật liệu độc quyền Oystersteel & Vàng 18ct",
  },
  "audemars-piguet": {
    badge1: "Di sản hơn 148 năm tinh hoa chế tác",
    badge2: "Biểu tượng Royal Oak & Code 11.59 kinh điển",
    badge3: "Kỹ thuật Haute Horlogerie & hoàn thiện thủ công",
  },
  "patek-philippe": {
    badge1: "Di sản hơn 185 năm nghệ thuật truyền đời",
    badge2: "Đỉnh cao Complications & Nautilus huyền thoại",
    badge3: "Bảo chứng con dấu Patek Philippe Seal cao quý",
  },
  "richard-mille": {
    badge1: "Đột phá công nghệ vật liệu đường đua F1",
    badge2: "Cấu trúc Tonneau siêu nhẹ & chống va đập",
    badge3: "Cỗ máy vi cơ khí đỉnh cao dành cho thế kỷ 21",
  },
  "hublot": {
    badge1: "Triết lý Art of Fusion kết hợp táo bạo",
    badge2: "Thiết kế Big Bang & Classic Fusion cá tính",
    badge3: "Chất liệu độc quyền King Gold & Ceramic cao cấp",
  },
  "cartier": {
    badge1: "Di sản hơn 177 năm kim hoàn & thời gian",
    badge2: "Tuyệt tác Santos & Tank thanh lịch vượt thời gian",
    badge3: "Nghệ thuật tạo hình hình học chuẩn mực Paris",
  },
  "franck-muller": {
    badge1: "Danh hiệu Master of Complications lừng danh",
    badge2: "Dáng vỏ Vanguard & Crazy Hours độc bản",
    badge3: "Sáng tạo vi cơ khí không giới hạn từ Geneva",
  },
};

export default function BrandStory({
  brandName,
  brandSlug,
  tagline = "Biểu tượng của sự sáng tạo và tinh tế vượt thời gian.",
  description = "Thành lập với sứ mệnh định hình chuẩn mực đỉnh cao của ngành chế tác vi cơ khí, mỗi cỗ máy thời gian là sự kết tinh hoàn mỹ giữa nghệ thuật kim hoàn, di sản truyền đời và độ chính xác tuyệt đối.",
  badge1,
  badge2,
  badge3,
}: BrandStoryProps) {
  const mosaic = BRAND_MOSAIC_IMAGES[brandSlug?.toLowerCase()] || BRAND_MOSAIC_IMAGES["rolex"];
  const defaultBadges = BRAND_FEATURE_BADGES[brandSlug?.toLowerCase()] || BRAND_FEATURE_BADGES["rolex"];
  const text1 = badge1 || defaultBadges.badge1;
  const text2 = badge2 || defaultBadges.badge2;
  const text3 = badge3 || defaultBadges.badge3;

  return (
    <section className="py-10 border-b border-[#EAE5DD]">
      {/* Breadcrumb */}
      <nav className="text-xs text-neutral-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-[#8C5824] transition-colors">
          Trang chủ
        </Link>
        <span>&gt;</span>
        <span className="text-[#1A1A1A] font-semibold">{brandName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left column: Text info */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C5824]">
            ABOUT {brandName.toUpperCase()}
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-normal leading-tight">
            {tagline}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>

          <Link
            href="#sub-collections"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors group"
          >
            <span>KHÁM PHÁ BỘ SƯU TẬP</span>
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          {/* 3 feature badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE5DD] text-center">
            <div className="flex flex-col items-center space-y-1.5">
              <Sparkles size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                {text1}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <ShieldCheck size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                {text2}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <Award size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                {text3}
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Showroom gallery mosaic */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
          {/* Top banner: Showroom VIP Lounge */}
          <div className="col-span-2 relative h-48 sm:h-56 rounded-sm overflow-hidden bg-[#ECE6DC] border border-[#EAE5DD] flex items-center justify-center">
            <div className="text-center p-6 space-y-2">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#1A1A1A] font-bold uppercase">
                KENNY LUXURY
              </span>
              <p className="text-xs text-[#8C5824] font-medium tracking-widest uppercase">
                VIP Boutique &amp; Private Lounge • 59B Mạc Đĩnh Chi
              </p>
            </div>
          </div>

          {/* Bottom left tile: Dial Macro */}
          <div className="relative h-32 sm:h-40 rounded-sm overflow-hidden bg-[#F6F2EA] border border-[#EAE5DD] flex items-center justify-center p-4 isolate">
            <div className="relative w-full h-full">
              <Image
                src={mosaic[0]}
                alt={`${brandName} Macro`}
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Bottom right tile: Movement Detail */}
          <div className="relative h-32 sm:h-40 rounded-sm overflow-hidden bg-[#F6F2EA] border border-[#EAE5DD] flex items-center justify-center p-4 isolate">
            <div className="relative w-full h-full">
              <Image
                src={mosaic[1]}
                alt={`${brandName} Movement`}
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
