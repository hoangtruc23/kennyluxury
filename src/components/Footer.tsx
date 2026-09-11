import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F6F2EA] border-t border-[#EAE5DD] text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="relative w-9 h-9 flex-shrink-0"
                style={{ width: "36px", height: "36px", minWidth: "36px", minHeight: "36px" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Kenny Luxury"
                  width={36}
                  height={36}
                  style={{ width: "36px", height: "36px", objectFit: "contain" }}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.2em] text-[#1A1A1A] font-bold uppercase">
                  KENNY LUXURY
                </span>
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-500 italic">
              Beyond Time, Beyond Luxury. <br />
              Những cỗ máy thời gian dành cho những giá trị trường tồn.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2 text-[#1A1A1A]">
              <Link href="#" aria-label="Facebook" className="hover:text-[#8C5824] transition-colors font-bold text-sm">f</Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[#8C5824] transition-colors font-bold text-sm">📷</Link>
              <Link href="#" aria-label="YouTube" className="hover:text-[#8C5824] transition-colors font-bold text-sm">▶</Link>
              <Link href="#" aria-label="TikTok" className="hover:text-[#8C5824] transition-colors font-bold text-sm">♫</Link>
            </div>
          </div>

          {/* Column 2: VỀ CHÚNG TÔI */}
          <div className="space-y-3">
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              VỀ CHÚNG TÔI
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="#" className="hover:text-[#8C5824] transition-colors">
                  Thương hiệu
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-[#8C5824] transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/dich-vu#faq" className="hover:text-[#8C5824] transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8C5824] transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SẢN PHẨM */}
          <div className="space-y-3">
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              SẢN PHẨM
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/danh-muc/rolex/yacht-master" className="hover:text-[#8C5824] transition-colors">
                  Rolex
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/patek-philippe/yacht-master" className="hover:text-[#8C5824] transition-colors">
                  Patek Philippe
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/audemars-piguet/yacht-master" className="hover:text-[#8C5824] transition-colors">
                  Audemars Piguet
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/richard-mille/yacht-master" className="hover:text-[#8C5824] transition-colors">
                  Richard Mille
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/rolex/yacht-master" className="hover:text-[#8C5824] transition-colors font-semibold">
                  Tất cả sản phẩm
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: DỊCH VỤ */}
          <div className="space-y-3">
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              DỊCH VỤ
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/dich-vu#booking" className="hover:text-[#8C5824] transition-colors">
                  Thu mua
                </Link>
              </li>
              <li>
                <Link href="/dich-vu#booking" className="hover:text-[#8C5824] transition-colors">
                  Ký gửi
                </Link>
              </li>
              <li>
                <Link href="/dich-vu#booking" className="hover:text-[#8C5824] transition-colors">
                  Trade-in lên đời
                </Link>
              </li>
              <li>
                <Link href="/dich-vu#booking" className="hover:text-[#8C5824] transition-colors">
                  Spa &amp; Bảo dưỡng đồng hồ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: LIÊN HỆ */}
          <div className="space-y-3">
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              LIÊN HỆ
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#8C5824] flex-shrink-0 mt-0.5" />
                <span>59B Mạc Đĩnh Chi, P. Tân Định, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#8C5824] flex-shrink-0" />
                <span className="text-[#1A1A1A] font-semibold">09 3333 6789 / 0906 222 222</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#8C5824] flex-shrink-0" />
                <span>info@kennyluxury.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#EAE5DD] mt-12 pt-6 text-center text-[11px] text-neutral-400">
          © 2019 – {new Date().getFullYear()} Kenny Luxury. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
