"use client";

import React from "react";
import Link from "next/link";
import { LayoutGrid, Grid2X2, Grid3X3, SlidersHorizontal } from "lucide-react";

interface ToolbarProps {
  brandName: string;
  collectionName: string;
  totalResults: number;
  productsPerPage: number;
  onProductsPerPageChange: (val: number) => void;
  columns: number;
  onColumnsChange: (val: number) => void;
  onToggleMobileFilter?: () => void;
}

export default function Toolbar({
  brandName,
  collectionName,
  totalResults,
  productsPerPage,
  onProductsPerPageChange,
  columns,
  onColumnsChange,
  onToggleMobileFilter,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs md:text-sm text-neutral-400 my-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs">
        <Link href="/" className="hover:text-gold transition-colors">
          Trang chủ
        </Link>
        <span className="text-neutral-600">/</span>
        <span className="uppercase text-neutral-300 font-medium">
          {brandName}
        </span>
        <span className="text-neutral-600">/</span>
        <span className="text-white font-medium">{collectionName}</span>
      </div>

      {/* Right Toolbar Controls */}
      <div className="flex items-center space-x-6">
        {/* Products per page */}
        <div className="hidden sm:flex items-center space-x-2 text-xs">
          <span className="text-neutral-500">Hiển thị :</span>
          {[9, 12, 18, 24].map((num) => (
            <button
              key={num}
              onClick={() => onProductsPerPageChange(num)}
              className={`px-1.5 py-0.5 transition-colors font-medium ${
                productsPerPage === num
                  ? "text-gold font-bold underline"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Columns switcher (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 border-l border-white/10 pl-6">
          <button
            onClick={() => onColumnsChange(2)}
            title="Lưới 2 cột"
            className={`p-1 transition-colors ${
              columns === 2 ? "text-gold" : "text-neutral-500 hover:text-white"
            }`}
          >
            <Grid2X2 size={18} />
          </button>
          <button
            onClick={() => onColumnsChange(3)}
            title="Lưới 3 cột"
            className={`p-1 transition-colors ${
              columns === 3 ? "text-gold" : "text-neutral-500 hover:text-white"
            }`}
          >
            <Grid3X3 size={18} />
          </button>
          <button
            onClick={() => onColumnsChange(4)}
            title="Lưới 4 cột"
            className={`p-1 transition-colors ${
              columns === 4 ? "text-gold" : "text-neutral-500 hover:text-white"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
        </div>

        {/* Mobile Filter Button */}
        {onToggleMobileFilter && (
          <button
            onClick={onToggleMobileFilter}
            className="lg:hidden flex items-center gap-1.5 text-xs text-gold border border-gold/40 px-3 py-1.5 rounded hover:bg-gold/10 transition-colors"
          >
            <SlidersHorizontal size={14} />
            <span>Bộ lọc</span>
          </button>
        )}
      </div>
    </div>
  );
}
