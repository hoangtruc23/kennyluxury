"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function JournalSection() {
  const articles = [
    {
      title: "5 yếu tố quyết định giá trị của một chiếc đồng hồ",
      image: "/images/skeleton-watch.jpg",
      link: "#",
    },
    {
      title: "Lịch sử và hành trình phát triển của Patek Philippe",
      image: "/images/faq-watch.jpg",
      link: "#",
    },
    {
      title: "Hướng dẫn bảo quản đồng hồ đúng cách",
      image: "/images/showroom-hero_.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F2EA] border-t border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">07</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                JOURNAL
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                ĐỌC NHANH &amp; KIẾN THỨC
              </p>
            </div>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] font-bold transition-colors mt-4 md:mt-0 group"
          >
            <span>XEM TẤT CẢ</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm overflow-hidden border border-[#EAE5DD] shadow-xs hover:border-[#8C5824] transition-all group flex flex-col justify-between"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug group-hover:text-[#8C5824] transition-colors">
                  {item.title}
                </h3>

                <div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors group/link"
                  >
                    <span>ĐỌC THÊM</span>
                    <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
