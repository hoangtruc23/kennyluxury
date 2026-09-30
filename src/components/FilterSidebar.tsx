"use client";

import React from "react";
import { FilterState } from "@/types";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  availableCollections: { name: string; slug: string; count: number }[];
  availableSizes?: string[];
  brandName?: string;
  totalBrandProducts?: number;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  availableCollections,
  availableSizes,
  brandName = "Rolex",
  totalBrandProducts = 32,
}: FilterSidebarProps) {
  const handleCollectionToggle = (slug: string) => {
    const isSelected = filters.collections.includes(slug);
    const newCollections = isSelected
      ? filters.collections.filter((c) => c !== slug)
      : [...filters.collections, slug];

    onFilterChange({ ...filters, collections: newCollections, caseSizes: [] });
  };

  const handleSizeToggle = (size: string) => {
    const isSelected = filters.caseSizes.includes(size);
    const newCaseSizes = isSelected
      ? filters.caseSizes.filter((s) => s !== size)
      : [...filters.caseSizes, size];

    onFilterChange({ ...filters, caseSizes: newCaseSizes });
  };

  const hasActiveFilters =
    filters.collections.length > 0 ||
    filters.stockStatuses.length > 0 ||
    filters.caseSizes.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 500000000000;

  const handleResetFilters = () => {
    onFilterChange({
      collections: [],
      stockStatuses: [],
      priceRange: [0, 500000000000],
      caseSizes: [],
    });
  };

  return (
    <aside className="w-full space-y-7 text-[#1A1A1A]">
      {/* Header: BỘ LỌC + XÓA TẤT CẢ */}
      <div className="flex justify-between items-center pb-3 border-b border-[#EAE5DD]">
        <h2 className="font-serif text-sm uppercase tracking-[0.15em] text-[#1A1A1A] font-bold">
          BỘ LỌC
        </h2>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-[11px] text-[#8C5824] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
          >
            Xóa tất cả
          </button>
        )}
      </div>

      {/* 1. THƯƠNG HIỆU */}
      <div className="space-y-3 pb-5 border-b border-[#EAE5DD]">
        <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
          Thương Hiệu
        </h3>
        <div className="flex items-center justify-between text-xs py-1">
          <span className="font-medium text-[#1A1A1A]">{brandName}</span>
          <span className="text-neutral-400 font-mono">({totalBrandProducts})</span>
        </div>
      </div>

      {/* 2. DÒNG SẢN PHẨM */}
      <div className="space-y-3 pb-5 border-b border-[#EAE5DD]">
        <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
          Dòng Sản Phẩm
        </h3>
        <div className="space-y-2.5">
          {availableCollections.map((col) => {
            const isChecked = filters.collections.includes(col.slug);
            return (
              <label
                key={col.slug}
                className="flex items-center justify-between cursor-pointer group select-none text-xs hover:text-[#8C5824] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCollectionToggle(col.slug)}
                    className="w-3.5 h-3.5 rounded border-[#D5CEC2] text-[#8C5824] focus:ring-0 cursor-pointer accent-[#8C5824]"
                  />
                  <span
                    className={
                      isChecked ? "text-[#8C5824] font-semibold" : "text-[#1A1A1A]"
                    }
                  >
                    {col.name}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">
                  ({col.count})
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 3. KÍCH THƯỚC VỎ (Under DÒNG SẢN PHẨM) */}
      {availableSizes && availableSizes.length > 0 && (
        <div className="space-y-3 pb-5 border-b border-[#EAE5DD]">
          <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
            Kích Thước Vỏ
          </h3>
          <div className="space-y-2.5">
            {availableSizes.map((size) => {
              const isChecked = filters.caseSizes.includes(size);
              return (
                <label
                  key={size}
                  className="flex items-center justify-between cursor-pointer group select-none text-xs hover:text-[#8C5824] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleSizeToggle(size)}
                      className="w-3.5 h-3.5 rounded border-[#D5CEC2] text-[#8C5824] focus:ring-0 cursor-pointer accent-[#8C5824]"
                    />
                    <span
                      className={
                        isChecked ? "text-[#8C5824] font-semibold" : "text-[#1A1A1A]"
                      }
                    >
                      {size}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
