"use client";

import React from "react";
import { FilterState } from "@/types";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  availableCollections: { name: string; slug: string; count: number }[];
  brandName?: string;
  totalBrandProducts?: number;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  availableCollections,
  brandName = "Rolex",
  totalBrandProducts = 32,
}: FilterSidebarProps) {
  const handleCollectionToggle = (slug: string) => {
    const isSelected = filters.collections.includes(slug);
    const newCollections = isSelected
      ? filters.collections.filter((c) => c !== slug)
      : [...filters.collections, slug];

    onFilterChange({ ...filters, collections: newCollections });
  };

  const handleStockToggle = (status: string) => {
    const isSelected = filters.stockStatuses.includes(status);
    const newStatuses = isSelected
      ? filters.stockStatuses.filter((s) => s !== status)
      : [...filters.stockStatuses, status];

    onFilterChange({ ...filters, stockStatuses: newStatuses });
  };

  const handleSizeToggle = (size: string) => {
    const isSelected = filters.caseSizes.includes(size);
    const newSizes = isSelected
      ? filters.caseSizes.filter((s) => s !== size)
      : [...filters.caseSizes, size];

    onFilterChange({ ...filters, caseSizes: newSizes });
  };

  const handlePriceSelect = (range: [number, number]) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const hasActiveFilters =
    filters.collections.length > 0 ||
    filters.stockStatuses.length > 0 ||
    filters.caseSizes.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 20000000000;

  const handleResetFilters = () => {
    onFilterChange({
      collections: [],
      stockStatuses: [],
      priceRange: [0, 20000000000],
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
            className="text-[11px] text-[#8C5824] hover:underline uppercase tracking-wider font-semibold"
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

      {/* 3. KHOẢNG GIÁ */}
      <div className="space-y-3 pb-5 border-b border-[#EAE5DD]">
        <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
          Khoảng Giá
        </h3>
        <div className="space-y-2 text-xs">
          {[
            { label: "Tất cả mức giá", range: [0, 20000000000] as [number, number] },
            { label: "Dưới 500 triệu", range: [0, 500000000] as [number, number] },
            {
              label: "500 triệu - 1 tỷ",
              range: [500000000, 1000000000] as [number, number],
            },
            {
              label: "Trên 1 tỷ",
              range: [1000000000, 20000000000] as [number, number],
            },
          ].map((tier, idx) => {
            const isChecked =
              filters.priceRange[0] === tier.range[0] &&
              filters.priceRange[1] === tier.range[1];
            return (
              <label
                key={idx}
                className="flex items-center gap-2.5 cursor-pointer select-none hover:text-[#8C5824] transition-colors"
              >
                <input
                  type="radio"
                  name="priceFilter"
                  checked={isChecked}
                  onChange={() => handlePriceSelect(tier.range)}
                  className="w-3.5 h-3.5 text-[#8C5824] focus:ring-0 cursor-pointer accent-[#8C5824]"
                />
                <span
                  className={
                    isChecked ? "text-[#8C5824] font-semibold" : "text-[#1A1A1A]"
                  }
                >
                  {tier.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. TÌNH TRẠNG KHO */}
      <div className="space-y-3 pb-5 border-b border-[#EAE5DD]">
        <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
          Tình Trạng Kho
        </h3>
        <div className="space-y-2.5 text-xs">
          <label className="flex items-center gap-2.5 cursor-pointer select-none hover:text-[#8C5824] transition-colors">
            <input
              type="checkbox"
              checked={filters.stockStatuses.includes("in_stock")}
              onChange={() => handleStockToggle("in_stock")}
              className="w-3.5 h-3.5 rounded border-[#D5CEC2] text-[#8C5824] focus:ring-0 cursor-pointer accent-[#8C5824]"
            />
            <span
              className={
                filters.stockStatuses.includes("in_stock")
                  ? "text-[#8C5824] font-semibold"
                  : "text-[#1A1A1A]"
              }
            >
              Có sẵn giao ngay
            </span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer select-none hover:text-[#8C5824] transition-colors">
            <input
              type="checkbox"
              checked={filters.stockStatuses.includes("pre_order")}
              onChange={() => handleStockToggle("pre_order")}
              className="w-3.5 h-3.5 rounded border-[#D5CEC2] text-[#8C5824] focus:ring-0 cursor-pointer accent-[#8C5824]"
            />
            <span
              className={
                filters.stockStatuses.includes("pre_order")
                  ? "text-[#8C5824] font-semibold"
                  : "text-[#1A1A1A]"
              }
            >
              Đặt hàng theo yêu cầu
            </span>
          </label>
        </div>
      </div>

      {/* 5. KÍCH THƯỚC VỎ */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider uppercase text-[#1A1A1A]">
          Kích Thước Vỏ
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {["37 mm", "40 mm", "42 mm", "44 mm"].map((size) => {
            const isSelected = filters.caseSizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeToggle(size)}
                className={`py-2 px-3 text-xs border transition-all text-center rounded-sm font-medium ${
                  isSelected
                    ? "border-[#8C5824] bg-[#8C5824] text-white"
                    : "border-[#EAE5DD] bg-white text-[#1A1A1A] hover:border-[#8C5824]"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
