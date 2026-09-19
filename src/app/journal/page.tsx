"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "ALL",
    "KIẾN THỨC",
    "XU HƯỚNG",
    "CÂU CHUYỆN THƯƠNG HIỆU",
    "BỘ SƯU TẬP",
    "SỰ KIỆN",
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A]">
      {/* ========================================================================= */}
      {/* 01. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-[#EAE5DD] py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#FBF9F5] via-[#F6F1E8] to-[#EAE0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Typography */}
            <div className="lg:col-span-6 space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-[#1A1A1A] uppercase leading-tight">
                JOURNAL
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#8C5824] font-normal">
                Góc nhìn &amp; Kiến thức
              </p>
              <p className="text-sm sm:text-base text-[#5A4A3D] max-w-md leading-relaxed font-light pt-2">
                Những câu chuyện, kiến thức và góc nhìn về thế giới đồng hồ xa xỉ.
              </p>
            </div>

            {/* Right Watch Macro Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/9] lg:aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-lg group">
                <Image
                  src="/images/skeleton-watch.jpg"
                  alt="Kenny Luxury Journal Grand Complication"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. CATEGORY TABS & SEARCH BAR */}
      {/* ========================================================================= */}
      <section className="py-6 border-b border-[#EAE5DD] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-xs uppercase font-bold tracking-wider">
              {categories.map((cat, idx) => (
                <React.Fragment key={cat}>
                  {idx > 0 && <span className="text-[#D5CEC2]">|</span>}
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`py-1.5 transition-colors ${activeCategory === cat
                        ? "text-[#8C5824] border-b-2 border-[#8C5824]"
                        : "text-[#1A1A1A]/70 hover:text-[#8C5824]"
                      }`}
                  >
                    {cat}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative flex items-center max-w-xs w-full">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs py-2.5 pl-3.5 pr-10 border border-[#EAE5DD] rounded-sm bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
              />
              <button
                aria-label="Tìm kiếm"
                className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-neutral-500 hover:text-[#8C5824] transition-colors border-l border-[#EAE5DD]"
              >
                <Search size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. FEATURED ARTICLES (MAIN HERO GRID) */}
      {/* ========================================================================= */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Featured Article Card (Left ~60%) */}
          <div className="lg:col-span-7 bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden flex flex-col justify-between group shadow-xs">
            <div className="relative h-64 sm:h-50 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/skeleton-watch.jpg"
                alt="5 yếu tố quyết định giá trị của một chiếc đồng hồ"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#8C5824] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs border border-[#EAE5DD]">
                KIẾN THỨC
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  5 yếu tố quyết định giá trị của một chiếc đồng hồ
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  Giá trị của một chiếc đồng hồ xa xỉ không chỉ nằm ở thương hiệu, mà còn ở những yếu tố cấu thành nên sự khác biệt và giá trị trường tồn.
                </p>
                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors group/link"
                  >
                    <span>ĐỌC THÊM</span>
                    <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE5DD] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>12.05.2024</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  5 phút đọc
                </span>
              </div>
            </div>
          </div>

          {/* Right 2 Stacked Cards (Right ~40%) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Top Right Card: Patek Philippe Nautilus */}
            <div className="bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden p-5 flex flex-col sm:flex-row gap-4 items-center group shadow-xs hover:border-[#8C5824] transition-colors">
              <div className="flex-1 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5824] block">
                  BỘ SƯU TẬP
                </span>
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  Patek Philippe Nautilus 5712R – Biểu tượng của sự thanh lịch vượt thời gian
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight size={12} />
                </Link>
                <div className="pt-2 text-[11px] text-neutral-400 font-mono flex items-center gap-3">
                  <span>10.05.2024</span>
                  <span>•</span>
                  <span>4 phút đọc</span>
                </div>
              </div>

              <div className="relative w-full sm:w-36 h-36 flex-shrink-0 rounded-xs overflow-hidden bg-white border border-[#EAE5DD]">
                <Image
                  src="/images/faq-watch.jpg"
                  alt="Patek Philippe Nautilus 5712R"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Right Card: Xu hướng đồng hồ 2024 */}
            <div className="bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden p-5 flex flex-col sm:flex-row gap-4 items-center group shadow-xs hover:border-[#8C5824] transition-colors">
              <div className="flex-1 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5824] block">
                  XU HƯỚNG
                </span>
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  Xu hướng đồng hồ 2024: Sự trở lại của những thiết kế cổ điển
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight size={12} />
                </Link>
                <div className="pt-2 text-[11px] text-neutral-400 font-mono flex items-center gap-3">
                  <span>08.05.2024</span>
                  <span>•</span>
                  <span>4 phút đọc</span>
                </div>
              </div>

              <div className="relative w-full sm:w-36 h-36 flex-shrink-0 rounded-xs overflow-hidden bg-white border border-[#EAE5DD]">
                <Image
                  src="/images/showroom-hero_.jpg"
                  alt="Xu hướng đồng hồ 2024"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. 3-COLUMN ARTICLES GRID */}
      {/* ========================================================================= */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden group shadow-xs hover:border-[#8C5824] transition-colors flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/showroom-hero.jpg"
                alt="Bảo dưỡng đồng hồ Thụy Sĩ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-[#8C5824] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                KIẾN THỨC
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  Quy trình bảo dưỡng đồng hồ chuẩn Thụy Sĩ gồm những gì?
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="pt-3 border-t border-[#EAE5DD] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>05.05.2024</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  6 phút đọc
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden group shadow-xs hover:border-[#8C5824] transition-colors flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png"
                alt="Lịch sử thương hiệu Rolex"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-[#8C5824] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                CÂU CHUYỆN THƯƠNG HIỆU
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  Lịch sử hình thành và phát triển của thương hiệu Rolex
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="pt-3 border-t border-[#EAE5DD] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>03.05.2024</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  7 phút đọc
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] overflow-hidden group shadow-xs hover:border-[#8C5824] transition-colors flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/showroom-lounge.jpg"
                alt="Watches &amp; Wonders 2024"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-[#8C5824] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                SỰ KIỆN
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  Watches &amp; Wonders 2024: Những điểm nhấn ấn tượng
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="pt-3 border-t border-[#EAE5DD] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>01.05.2024</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  5 phút đọc
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 05. PAGINATION BAR */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-2 pt-12">
          <button
            aria-label="Trang trước"
            className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] flex items-center justify-center text-xs text-neutral-600 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white font-bold text-xs flex items-center justify-center shadow-xs">
            1
          </button>
          <button className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] text-xs text-neutral-600 flex items-center justify-center transition-colors">
            2
          </button>
          <button className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] text-xs text-neutral-600 flex items-center justify-center transition-colors">
            3
          </button>
          <button className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] text-xs text-neutral-600 flex items-center justify-center transition-colors">
            4
          </button>
          <button className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] text-xs text-neutral-600 flex items-center justify-center transition-colors">
            5
          </button>
          <button
            aria-label="Trang sau"
            className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] flex items-center justify-center text-xs text-neutral-600 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. NEWSLETTER SUBSCRIBE BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#EFEBE4] border-t border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] uppercase font-normal tracking-wide">
                KHÔNG BỎ LỠ BÀI VIẾT MỚI
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Cập nhật những bài viết mới nhất về thế giới đồng hồ xa xỉ và các câu chuyện thú vị từ Kenny Luxury.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-white border border-[#8C5824] px-6 py-3.5 rounded-sm text-xs text-[#8C5824] font-bold uppercase tracking-wider">
                ✓ Đã đăng ký nhận bản tin thành công!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md w-full gap-2">
                <input
                  type="email"
                  required
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-xs p-3.5 border border-[#D5CEC2] rounded-sm bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#A06C38] hover:bg-[#8C5824] text-white px-7 py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-all flex-shrink-0"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
