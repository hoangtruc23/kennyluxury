"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopByBrand() {
  const brandLogos = [
    {
      name: "ROLEX",
      logo: "/images/brands/rolex.png",
      href: "/danh-muc/rolex/yacht-master",
    },
    {
      name: "PATEK PHILIPPE",
      logo: "/images/brands/patek-philippe.png",
      href: "/danh-muc/patek-philippe/yacht-master",
    },
    {
      name: "AUDEMARS PIGUET",
      logo: "/images/brands/audemars-piguet.png",
      href: "/danh-muc/audemars-piguet/code-11-59",
    },
    {
      name: "RICHARD MILLE",
      logo: "/images/brands/richard-mille.png",
      href: "/danh-muc/richard-mille/rm-011",
    },
    {
      name: "Cartier",
      logo: "/images/brands/cartier.png",
      href: "/danh-muc/rolex/yacht-master",
    },
    {
      name: "HUBLOT",
      logo: "/images/brands/hublot.png",
      href: "/danh-muc/hublot/yacht-master",
    },
    {
      name: "VACHERON CONSTANTIN",
      logo: "/images/brands/vacheron-constantin.png",
      href: "/danh-muc/rolex/yacht-master",
    },
    {
      name: "FRANCK MULLER",
      logo: "/images/brands/franck-muller.png",
      href: "/danh-muc/rolex/yacht-master",
    },
  ];

  return (
    <section className="py-16 bg-[#F6F2EA] border-y border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-10">
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

        {/* Larger Seamless Brand Logos Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center">
          {brandLogos.map((brand, idx) => (
            <Link
              key={idx}
              href={brand.href}
              className="group relative h-20 sm:h-24 lg:h-28 flex items-center justify-center p-2 text-center transition-transform hover:scale-110"
            >
              <div className="relative w-full h-full max-h-16 sm:max-h-20">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
