"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturedCollections() {
  const collections = [
    {
      brand: "ROLEX",
      link: "/danh-muc/rolex/yacht-master",
      image: "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
      bgGradient: "from-black/80 via-black/40 to-transparent",
    },
    {
      brand: "PATEK PHILIPPE",
      link: "/danh-muc/patek-philippe/yacht-master",
      image: "/images/skeleton-watch.jpg",
      bgGradient: "from-black/80 via-black/40 to-transparent",
    },
    {
      brand: "AUDEMARS PIGUET",
      link: "/danh-muc/audemars-piguet/code-11-59",
      image: "/images/faq-watch.jpg",
      bgGradient: "from-black/80 via-black/40 to-transparent",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#EAE5DD]">
        <div className="flex items-start gap-3">
          <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">02</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
              FEATURED COLLECTION
            </h2>
            <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
              BỘ SƯU TẬP NỔI BẬT
            </p>
          </div>
        </div>
        <Link
          href="/danh-muc/rolex/yacht-master"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] font-bold transition-colors mt-4 md:mt-0 group"
        >
          <span>XEM TẤT CẢ</span>
          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Featured Collection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="group relative h-72 sm:h-80 md:h-96 rounded-sm overflow-hidden bg-[#1A1A1A] shadow-md border border-[#EAE5DD] transition-transform duration-500 hover:-translate-y-1"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.brand}
              fill
              className="object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />

            {/* Dark Luxury Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Bottom Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 z-10">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-widest uppercase">
                {item.brand}
              </h3>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] group-hover:text-white font-medium transition-colors">
                <span>DISCOVER NOW</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
