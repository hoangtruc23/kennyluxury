"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // number of pages around current

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      aria-label="Phân trang sản phẩm"
      className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-10 pb-4 ${className}`}
    >
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-colors select-none ${
          currentPage === 1
            ? "border-[#EAE5DD] text-neutral-400 bg-transparent cursor-not-allowed opacity-50"
            : "border-[#EAE5DD] bg-[#F6F2EA] text-[#1A1A1A] hover:border-[#8C5824] hover:text-[#8C5824] hover:bg-[#EFEBE4] cursor-pointer"
        }`}
        aria-label="Trang trước"
      >
        <ChevronLeft size={14} />
        <span className="hidden sm:inline">Trước</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pageNumbers.map((page, idx) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 py-1 text-xs text-neutral-400 select-none"
              >
                ...
              </span>
            );
          }

          const pageNum = Number(page);
          const isActive = pageNum === currentPage;

          return (
            <button
              key={`page-${pageNum}`}
              type="button"
              onClick={() => onPageChange(pageNum)}
              aria-current={isActive ? "page" : undefined}
              className={`min-w-[36px] h-9 px-2 flex items-center justify-center text-xs font-semibold rounded-sm border transition-all select-none ${
                isActive
                  ? "bg-[#8C5824] border-[#8C5824] text-white shadow-xs font-bold"
                  : "border-[#EAE5DD] bg-[#F6F2EA] text-[#1A1A1A] hover:border-[#8C5824] hover:text-[#8C5824] hover:bg-[#EFEBE4]"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-colors select-none ${
          currentPage === totalPages
            ? "border-[#EAE5DD] text-neutral-400 bg-transparent cursor-not-allowed opacity-50"
            : "border-[#EAE5DD] bg-[#F6F2EA] text-[#1A1A1A] hover:border-[#8C5824] hover:text-[#8C5824] hover:bg-[#EFEBE4] cursor-pointer"
        }`}
        aria-label="Trang sau"
      >
        <span className="hidden sm:inline">Sau</span>
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}
