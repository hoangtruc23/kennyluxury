"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ExperienceBanner() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#14100C] text-white overflow-hidden border-t border-[#EAE5DD]/20">
      {/* Background Image with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/showroom-entrance.jpg"
          alt="Kenny Luxury Boutique Storefront"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14100C] via-[#14100C]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Title & Subtitle */}
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] pt-1">09</span>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wider uppercase text-white leading-tight">
                  EXPERIENCE KENNY LUXURY.
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-light mt-2">
                  Trải nghiệm dịch vụ đẳng cấp trong không gian sang trọng.
                </p>
              </div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/lien-he#booking"
              className="bg-[#8C5824] hover:bg-[#724419] text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all hover:scale-105"
            >
              ĐẶT LỊCH SHOWROOM
            </Link>

            <Link
              href="#contact"
              className="border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.18em] transition-all backdrop-blur-xs"
            >
              LIÊN HỆ TƯ VẤN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
