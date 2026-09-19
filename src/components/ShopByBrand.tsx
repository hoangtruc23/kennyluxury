"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShopByBrand() {
  const brandLogos = [
    { name: "ROLEX", slug: "rolex", href: "/danh-muc/rolex/yacht-master" },
    { name: "PATEK PHILIPPE", slug: "patek-philippe", href: "/danh-muc/patek-philippe/yacht-master" },
    { name: "AUDEMARS PIGUET", slug: "audemars-piguet", href: "/danh-muc/audemars-piguet/code-11-59" },
    { name: "RICHARD MILLE", slug: "richard-mille", href: "/danh-muc/richard-mille/rm-011" },
    { name: "Cartier", slug: "cartier", href: "/danh-muc/rolex/yacht-master" },
    { name: "HUBLOT", slug: "hublot", href: "/danh-muc/hublot/yacht-master" },
    { name: "VACHERON CONSTANTIN", slug: "vacheron-constantin", href: "/danh-muc/rolex/yacht-master" },
    { name: "A. LANGE & SÖHNE", slug: "a-lange-sohne", href: "/danh-muc/rolex/yacht-master" },
  ];

  return (
    <section className="py-14 bg-[#F6F2EA] border-y border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-8">
          <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">03</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
              SHOP BY BRAND
            </h2>
            <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
              THƯƠNG HIỆU
            </p>
          </div>
        </div>

        {/* Brands Horizontal Row / Grid with Slider Arrow */}
        <div className="relative flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 w-full">
            {brandLogos.map((brand, idx) => (
              <Link
                key={idx}
                href={brand.href}
                className="p-4 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] hover:shadow-md transition-all group flex flex-col items-center justify-center min-h-[80px] text-center"
              >
                <span className="font-serif text-xs sm:text-sm tracking-wider text-[#1A1A1A] group-hover:text-[#8C5824] font-bold uppercase transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-center min-w-[36px] h-10 rounded-sm bg-[#8C5824] text-white hover:bg-[#724419] cursor-pointer transition-colors shadow-sm ml-1 flex-shrink-0">
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
