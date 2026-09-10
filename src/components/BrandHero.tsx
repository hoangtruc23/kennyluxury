import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandHeroProps {
  brandName?: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
}

export default function BrandHero({
  brandName = "ROLEX",
  subtitle = "Timeless Elegance.",
  description = "Biểu tượng của sự thanh lịch vượt thời gian và tinh thần sáng tạo đỉnh cao.",
  heroImage = "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png",
}: BrandHeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#FBF9F5] via-[#F6F2EA] to-[#EDE7DC] border-b border-[#EAE5DD] overflow-hidden py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#1A1A1A] font-normal uppercase">
              {brandName}
            </h1>

            <p className="font-serif text-2xl sm:text-3xl text-[#8C5824] italic font-normal -mt-2">
              {subtitle}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="#catalog"
                className="bg-[#8C5824] hover:bg-[#724419] text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-3.5 rounded-sm shadow-sm transition-all hover:scale-105"
              >
                KHÁM PHÁ BỘ SƯU TẬP
              </Link>

              <Link
                href="/lien-he"
                className="bg-transparent hover:bg-black/5 text-[#1A1A1A] border border-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-3.5 rounded-sm transition-all"
              >
                LIÊN HỆ TƯ VẤN
              </Link>
            </div>
          </div>

          {/* Right Column: Large Watch Closeup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 sm:w-96 h-72 sm:h-96 transform lg:scale-110 drop-shadow-2xl">
              <Image
                src={heroImage}
                alt={brandName}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
