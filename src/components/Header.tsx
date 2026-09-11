"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { BRANDS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);

  const isHome = pathname === "/";
  const isServices = pathname === "/dich-vu";

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE5DD]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-10 h-10 flex-shrink-0"
            style={{ width: "40px", height: "40px", minWidth: "40px", minHeight: "40px" }}
          >
            <Image
              src="/images/logo.png"
              alt="Kenny Luxury"
              width={40}
              height={40}
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] text-[#1A1A1A] font-bold uppercase leading-none">
              KENNY
            </span>
            <span className="font-serif text-[10px] tracking-[0.35em] text-[#8C5824] uppercase mt-0.5 font-medium leading-none">
              LUXURY
            </span>
          </div>
        </Link>

        {/* Center Navigation matching sample */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-[0.15em] font-semibold text-[#1A1A1A]">
          {/* TRANG CHỦ */}
          <Link
            href="/"
            className={`py-1.5 transition-colors ${
              isHome
                ? "px-4 rounded-full bg-[#EAE2D5] text-[#1A1A1A] font-bold shadow-xs"
                : "hover:text-[#8C5824]"
            }`}
          >
            Trang Chủ
          </Link>

          {/* Thương Hiệu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBrandDropdownOpen(true)}
            onMouseLeave={() => setBrandDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 py-2 hover:text-[#8C5824] transition-colors">
              <span>Thương Hiệu</span>
              <ChevronDown size={13} />
            </button>

            {brandDropdownOpen && (
              <div className="absolute top-full -left-4 w-60 bg-white border border-[#EAE5DD] rounded-sm shadow-xl py-2 px-1 z-50">
                <div className="text-[10px] text-neutral-400 uppercase px-3 py-1.5 border-b border-neutral-100 font-semibold tracking-wider">
                  Thương hiệu cao cấp
                </div>
                {BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/danh-muc/${b.slug}/yacht-master`}
                    className="block px-3 py-2 text-xs text-[#1A1A1A] hover:text-[#8C5824] hover:bg-[#FBF9F5] rounded-sm transition-colors"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SẢN PHẨM */}
          <Link
            href="/danh-muc/rolex/yacht-master"
            className="hover:text-[#8C5824] transition-colors py-2"
          >
            Sản Phẩm
          </Link>

          {/* DỊCH VỤ */}
          <Link
            href="/dich-vu"
            className={`py-2 transition-colors relative ${
              isServices
                ? "text-[#8C5824] font-bold border-b-2 border-[#8C5824]"
                : "hover:text-[#8C5824]"
            }`}
          >
            Dịch Vụ
          </Link>

          {/* JOURNAL */}
          <Link
            href="/#journal"
            className="hover:text-[#8C5824] transition-colors py-2"
          >
            Journal
          </Link>

          {/* LIÊN HỆ */}
          <Link
            href="/dich-vu#booking"
            className="hover:text-[#8C5824] transition-colors py-2"
          >
            Liên Hệ
          </Link>
        </nav>

        {/* Right Utility Icons */}
        <div className="flex items-center space-x-5 text-[#1A1A1A]">
          <button
            aria-label="Tìm kiếm sản phẩm"
            className="hover:text-[#8C5824] transition-colors p-1"
          >
            <Search size={19} strokeWidth={1.75} />
          </button>

          <Link
            href="#"
            aria-label="Tài khoản khách hàng"
            className="hidden sm:inline-flex hover:text-[#8C5824] transition-colors p-1"
          >
            <User size={19} strokeWidth={1.75} />
          </Link>

          <Link
            href="#"
            aria-label="Giỏ hàng / Đơn hàng"
            className="hover:text-[#8C5824] transition-colors p-1 relative"
          >
            <ShoppingBag size={19} strokeWidth={1.75} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8C5824] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu di động"
            className="lg:hidden p-1 hover:text-[#8C5824] transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE5DD] bg-[#FBF9F5] px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs uppercase tracking-wider font-bold ${
              isHome ? "text-[#8C5824]" : "text-[#1A1A1A]"
            }`}
          >
            Trang Chủ
          </Link>
          <div className="pt-2 border-t border-[#EAE5DD]">
            <p className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider mb-2">
              Thương Hiệu
            </p>
            <div className="grid grid-cols-2 gap-2">
              {BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  href={`/danh-muc/${b.slug}/yacht-master`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-[#1A1A1A] hover:text-[#8C5824] py-1"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/danh-muc/rolex/yacht-master"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] pt-2 border-t border-[#EAE5DD]"
          >
            Sản Phẩm
          </Link>
          <Link
            href="/dich-vu"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs uppercase tracking-wider font-semibold ${
              isServices ? "text-[#8C5824]" : "text-[#1A1A1A]"
            }`}
          >
            Dịch Vụ
          </Link>
          <Link
            href="/#journal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]"
          >
            Journal
          </Link>
          <Link
            href="/dich-vu#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]"
          >
            Liên Hệ
          </Link>
        </div>
      )}
    </header>
  );
}
