import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandHeroProps {
  brandName?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  videoUrl?: string;
}

export default function BrandHero({
  brandName = "ROLEX",
  title,
  subtitle = "Timeless Elegance.",
  description = "Biểu tượng của sự thanh lịch vượt thời gian và tinh thần sáng tạo đỉnh cao.",
  heroImage = "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png",
  videoUrl,
}: BrandHeroProps) {
  // If videoUrl is provided, render cinematic 80vh video hero
  if (videoUrl) {
    const displayTitle = title || (brandName ? `ĐỒNG HỒ ${brandName.toUpperCase()}` : "ĐỒNG HỒ CAO CẤP");

    return (
      <section className="-mt-20 relative w-full h-[80vh] min-h-[560px] max-h-[880px] overflow-hidden flex items-end bg-black border-b border-neutral-900">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        {/* Top Gradient for Header contrast */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

        {/* Subtle overall dark tint */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none z-10" />

        {/* Bottom Gradient for Text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none z-10" />

        {/* Bottom-left Typography matching reference design */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14 lg:pb-16">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal tracking-wide text-white uppercase leading-[1.15] drop-shadow-sm">
              {displayTitle}
            </h1>

            {description && (
              <div className="border-l-2 border-white/70 pl-4 sm:pl-6">
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed tracking-wide drop-shadow-sm">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Fallback to static image hero
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
                href="#sub-collections"
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
