"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  const posts = [
    "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
    "/images/watches/Dong-Ho-Rolex-Yacht-Master-37-268622-0002-Mat-So-Rhodium-800x800.png",
    "/images/showroom-lounge.jpg",
    "/images/showroom-hero.jpg",
    "/images/skeleton-watch.jpg",
    "/images/showroom-hero_.jpg",
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
        <div className="flex items-start gap-3">
          <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">08</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
              @KENNY.LUXURY.OFFICIAL
            </h2>
            <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
              FOLLOW US ON INSTAGRAM
            </p>
          </div>
        </div>

        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#EAE5DD] hover:border-[#8C5824] rounded-sm text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] transition-colors mt-4 md:mt-0"
        >
          <span>XEM INSTAGRAM</span>
          <Instagram size={14} />
        </Link>
      </div>

      {/* 6 Grid items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {posts.map((imgSrc, idx) => (
          <Link
            key={idx}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-44 sm:h-52 rounded-sm overflow-hidden bg-white border border-[#EAE5DD]"
          >
            <Image
              src={imgSrc}
              alt={`Instagram post ${idx + 1}`}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Instagram size={24} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
