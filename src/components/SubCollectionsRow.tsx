"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SubCollectionItem {
  name: string;
  slug: string;
  image: string;
}

interface SubCollectionsRowProps {
  items: SubCollectionItem[];
  activeSlug?: string;
  brandSlug?: string;
}

export default function SubCollectionsRow({
  items,
  activeSlug,
  brandSlug = "rolex",
}: SubCollectionsRowProps) {
  const handleScrollToCollections = () => {
    const el = document.getElementById("sub-collections");
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // If the sub-collections section is not already aligned in view, scroll smoothly to it
      if (Math.abs(elementPosition - headerOffset) > 120) {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div id="sub-collections" className="py-8 border-b border-[#EAE5DD] scroll-mt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
          BỘ SƯU TẬP
        </h2>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span className="font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Sắp xếp:
          </span>
          <select aria-label="Sắp xếp danh mục" className="bg-transparent border-none text-xs text-[#1A1A1A] font-medium focus:ring-0 cursor-pointer p-0">
            <option>Mới nhất</option>
            <option>Phổ biến nhất</option>
          </select>
        </div>
      </div>

      {/* Grid of Sub-collection Cards */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 ${
          items.length <= 4
            ? "md:grid-cols-4"
            : items.length === 5
            ? "md:grid-cols-5"
            : "md:grid-cols-6"
        } gap-3 sm:gap-4`}
      >
        {items.map((item) => {
          const isActive =
            item.slug === activeSlug ||
            ((item.slug === "rm-sport-lifestyle" || item.slug === "rm-sport") &&
              (activeSlug === "rm-sport-lifestyle" || activeSlug === "rm-sport"));
          return (
            <Link
              key={item.slug}
              href={`/danh-muc/${brandSlug}/${item.slug}`}
              scroll={false}
              onClick={handleScrollToCollections}
              className={`group block p-4 bg-white border transition-all duration-300 rounded-sm text-center ${
                isActive
                  ? "border-[#8C5824] ring-1 ring-[#8C5824]/30 shadow-sm"
                  : "border-[#EAE5DD] hover:border-[#D5CEC2] hover:shadow-sm"
              }`}
            >
              {/* Watch Thumbnail */}
              <div className="relative w-full aspect-square mb-3 overflow-hidden flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title with Arrow */}
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#8C5824] transition-colors">
                <span className="truncate">{item.name}</span>
                <span className="transform group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
