"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-[#EAE5DD]">
      {/* 1. Neoclassical Boutique Showroom Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/showroom-hero.jpg"
          alt="Kenny Luxury VIP Boutique Showroom"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft Warm Ivory Gradient Overlay matching sample design */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/85 md:via-[#FBF9F5]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#221810] leading-[1.08] uppercase">
                BEYOND TIME. <br />
                BEYOND LUXURY.
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#5A4A3D] max-w-md leading-relaxed font-light">
              Những cỗ máy thời gian dành cho <br className="hidden sm:inline" />
              những giá trị trường tồn.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/danh-muc/rolex/yacht-master"
                className="bg-[#8C5824] hover:bg-[#724419] text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.18em] shadow-sm transition-all hover:scale-105"
              >
                KHÁM PHÁ BỘ SƯU TẬP
              </Link>

              <Link
                href="#contact"
                className="border border-[#8C5824]/50 hover:border-[#8C5824] bg-white/40 hover:bg-white/80 text-[#1A1A1A] px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.18em] transition-all backdrop-blur-xs"
              >
                LIÊN HỆ TƯ VẤN
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8 sm:pt-12 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#6A5A4D] font-medium">
              <span>SCROLL</span>
              <span className="font-mono text-base transform translate-x-1 animate-pulse">→</span>
            </div>
          </div>

          {/* Right Column: 3D Angled Luxury Watch Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-72 sm:w-96 md:w-[460px] lg:w-[540px] aspect-square transform -rotate-12 lg:scale-125 lg:translate-x-12 filter drop-shadow-[0_35px_45px_rgba(0,0,0,0.4)] hover:scale-[1.28] transition-transform duration-700 ease-out">
              <Image
                src="/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226658-0001-Mat-So-Den-800x800.png"
                alt="Rolex Cosmograph Luxury Timepiece"
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
