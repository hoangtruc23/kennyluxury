"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToCollections = () => {
    const el = document.getElementById("sub-collections");
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      if (Math.abs(elementPosition - headerOffset) > 120) {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }
  };

  const isSlider = items.length > 5;

  return (
    <div id="sub-collections" className="py-8 border-b border-[#EAE5DD] scroll-mt-24">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="font-serif text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
            BỘ SƯU TẬP
          </h2>
          {isSlider && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous slide"
                className={`p-1.5 rounded-full border transition-all ${canScrollLeft
                  ? "border-[#8C5824] text-[#8C5824] hover:bg-[#8C5824] hover:text-white cursor-pointer"
                  : "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40"
                  }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next slide"
                className={`p-1.5 rounded-full border transition-all ${canScrollRight
                  ? "border-[#8C5824] text-[#8C5824] hover:bg-[#8C5824] hover:text-white cursor-pointer"
                  : "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40"
                  }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span className="font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Sắp xếp:
          </span>
          <select
            aria-label="Sắp xếp danh mục"
            className="bg-transparent border-none text-xs text-[#1A1A1A] font-medium focus:ring-0 cursor-pointer p-0"
          >
            <option>Mới nhất</option>
            <option>Phổ biến nhất</option>
          </select>
        </div>
      </div>

      {/* Single-row Grid/Slider Container (Max 5 items per line) */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
              className={`group flex-none w-[calc(50%-6px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)] snap-start p-4 bg-[#F6F2EA] hover:bg-[#EFEBE4] border transition-all duration-300 rounded-sm text-center isolate ${isActive
                ? "border-[#8C5824] ring-1 ring-[#8C5824]/30"
                : "border-[#EAE5DD] hover:border-[#D5CEC2]"
                }`}
            >
              {/* Watch Thumbnail */}
              <div className="relative w-full aspect-square mb-3 overflow-hidden flex items-center justify-center">
                <div className="relative w-[90%] h-[90%] group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`${
                      brandSlug?.toLowerCase() === "rolex"
                        ? "object-cover"
                        : "object-contain"
                    } mix-blend-multiply`}
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
