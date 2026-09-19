"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutKennyLuxury() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-start gap-3 mb-10 pb-4 border-b border-[#EAE5DD]">
        <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">04</span>
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
            ABOUT KENNY LUXURY
          </h2>
          <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
            VỀ KENNY LUXURY
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed font-light">
            Thành lập từ năm 2019, Kenny Luxury tự hào là điểm đến tin cậy dành cho những khách hàng đam mê &amp; trân trọng những chiếc đồng hồ.
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Chúng tôi cam kết mang đến những sản phẩm chính hãng, dịch vụ tận tâm cùng không gian đẳng cấp, nơi trò chuyện nhân phong đam mê và kết nối giá trị.
          </p>

          <div className="pt-2">
            <Link
              href="/danh-muc/rolex/yacht-master"
              className="inline-block bg-[#8C5824] hover:bg-[#724419] text-white px-7 py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-all hover:scale-105"
            >
              KHÁM PHÁ THƯƠNG HIỆU
            </Link>
          </div>
        </div>

        {/* Right Column: Showroom Image */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
          <Image
            src="/images/showroom-lounge.jpg"
            alt="Kenny Luxury VIP Boutique Showroom"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
