"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ShowroomExperience() {
  const subSpaces = [
    {
      title: "KHU TRƯNG BÀY",
      desc: "Không gian trưng bày đẳng cấp với những tuyệt tác thời gian.",
      image: "/images/showroom-hero.jpg",
    },
    {
      title: "PHÒNG VIP",
      desc: "Không gian riêng tư cho những trải nghiệm đặc biệt.",
      image: "/images/showroom-hero_.jpg",
    },
    {
      title: "KHU TIẾP KHÁCH",
      desc: "Sự thoải mái và tinh tế trong từng chi tiết nhỏ.",
      image: "/images/showroom-lounge.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F2EA] border-t border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">05</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                SHOWROOM EXPERIENCE
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                KHÔNG GIAN TRẢI NGHIỆM
              </p>
            </div>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] font-bold transition-colors mt-4 md:mt-0 group"
          >
            <span>XEM TẤT CẢ</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Showroom Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Showcase Photo */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[320px] rounded-sm overflow-hidden border border-[#EAE5DD] shadow-sm group">
            <Image
              src="/images/showroom-lounge.jpg"
              alt="Kenny Luxury Main Lounge"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-bold uppercase block">
                KENNY LUXURY
              </span>
              <p className="text-xs text-neutral-300 font-light tracking-wider">
                BOUTIQUE &amp; PRIVATE LOUNGE
              </p>
            </div>
          </div>

          {/* 3 Right Sub-Space Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {subSpaces.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-sm overflow-hidden bg-[#F6F2EA] border border-[#EAE5DD] shadow-xs group hover:border-[#8C5824] transition-colors"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 flex-1 space-y-1.5 flex flex-col justify-between">
                  <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
