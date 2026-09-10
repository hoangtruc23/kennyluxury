import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Award } from "lucide-react";

interface BrandStoryProps {
  brandName: string;
  brandSlug: string;
  tagline?: string;
  description?: string;
}

export default function BrandStory({
  brandName,
  brandSlug,
  tagline = "Biểu tượng của sự sáng tạo và tinh tế vượt thời gian.",
  description = "Thành lập với sứ mệnh định hình chuẩn mực đỉnh cao của ngành chế tác vi cơ khí, mỗi cỗ máy thời gian là sự kết tinh hoàn mỹ giữa nghệ thuật kim hoàn, di sản truyền đời và độ chính xác tuyệt đối.",
}: BrandStoryProps) {
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
            href={`/danh-muc/${brandSlug}/yacht-master`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors group"
          >
            <span>KHÁM PHÁ THƯƠNG HIỆU</span>
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          {/* 3 feature badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE5DD] text-center">
            <div className="flex flex-col items-center space-y-1.5">
              <Sparkles size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                Thiết kế đậm chất thương hiệu
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <ShieldCheck size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                Di sản chế tác đỉnh cao
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <Award size={20} className="text-[#8C5824]" />
              <span className="text-[11px] text-neutral-700 font-medium leading-snug">
                Tinh tế trong từng chi tiết
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
          <div className="relative h-32 sm:h-40 rounded-sm overflow-hidden bg-white border border-[#EAE5DD] flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src="/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png"
                alt="Watch Dial"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom right tile: Movement Detail */}
          <div className="relative h-32 sm:h-40 rounded-sm overflow-hidden bg-white border border-[#EAE5DD] flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src="/images/watches/Dong-Ho-Rolex-Yacht-Master-37-268622-0002-Mat-So-Rhodium-800x800.png"
                alt="Movement Detail"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
