"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  UserCheck,
  Handshake,
  Headphones,
  Search,
  Heart,
  ChevronLeft,
  ChevronRight,
  Repeat,
  Package,
  Award,
  Wrench,
} from "lucide-react";

export default function BrandPage() {
  const [journeyIndex, setJourneyIndex] = useState(0);

  const philosophyItems = [
    {
      code: "AUTHENTICITY",
      title: "Chính hãng",
      desc: "Cam kết 100% sản phẩm chính hãng, có đầy đủ giấy tờ và nguồn gốc rõ ràng.",
      icon: ShieldCheck,
    },
    {
      code: "TRANSPARENCY",
      title: "Minh bạch",
      desc: "Mọi thông tin về sản phẩm, giá cả và chính sách đều được công khai và minh bạch.",
      icon: FileText,
    },
    {
      code: "EXPERTISE",
      title: "Chuyên môn",
      desc: "Đội ngũ chuyên gia giàu kinh nghiệm, am hiểu sâu sắc về đồng hồ xa xỉ.",
      icon: UserCheck,
    },
    {
      code: "LONG-TERM RELATIONSHIP",
      title: "Đồng hành lâu dài",
      desc: "Xây dựng mối quan hệ bền vững, luôn đồng hành và hỗ trợ khách hàng trong suốt quá trình sử dụng.",
      icon: Handshake,
    },
  ];

  const showroomSubSpaces = [
    {
      title: "PHÒNG VIP",
      desc: "Không gian riêng tư cho những trải nghiệm đặc biệt.",
      image: "/images/showroom-lounge.jpg",
    },
    {
      title: "TỦ TRƯNG BÀY",
      desc: "Hệ thống trưng bày hiện đại, đảm bảo tiêu chuẩn quốc tế.",
      image: "/images/showroom-hero.jpg",
    },
    {
      title: "KHU TIẾP KHÁCH",
      desc: "Không gian thư giãn sang trọng, phục vụ tận tâm và chuyên nghiệp.",
      image: "/images/showroom-hero_.jpg",
    },
  ];

  const journeyMilestones = [
    {
      year: "2019",
      title: "Thành lập Kenny Luxury",
      desc: "Khởi đầu với niềm đam mê đồng hồ và khát vọng mang đến giá trị thật.",
    },
    {
      year: "2020",
      title: "Mở rộng showroom",
      desc: "Nâng cấp không gian và dịch vụ để phục vụ khách hàng tốt hơn.",
    },
    {
      year: "2022",
      title: "Hơn 1000 khách hàng",
      desc: "Trở thành lựa chọn tin cậy của cộng đồng sưu tầm và những người yêu đồng hồ.",
    },
    {
      year: "2024",
      title: "Nâng cấp toàn diện",
      desc: "Hoàn thiện trải nghiệm mua sắm và dịch vụ hậu mãi chuẩn quốc tế.",
    },
    {
      year: "2026",
      title: "Định hướng Luxury House",
      desc: "Tiếp tục mở rộng, khẳng định vị thế và mang đến giá trị vượt thời gian.",
    },
  ];

  const whyChooseUs = [
    {
      title: "CHÍNH HÃNG 100%",
      desc: "100% sản phẩm chính hãng, đầy đủ giấy tờ.",
      icon: ShieldCheck,
    },
    {
      title: "MINH BẠCH",
      desc: "Thông tin rõ ràng, giá trị xứng đáng.",
      icon: FileText,
    },
    {
      title: "TRADE-IN",
      desc: "Hỗ trợ thu cũ đổi mới với giá trị tốt nhất.",
      icon: Repeat,
    },
    {
      title: "KÝ GỬI",
      desc: "Dịch vụ ký gửi an toàn, hiệu quả, chuyên nghiệp.",
      icon: Package,
    },
    {
      title: "HẬU MÃI",
      desc: "Chính sách bảo hành và chăm sóc tận tâm.",
      icon: Award,
    },
    {
      title: "SPA ĐỒNG HỒ",
      desc: "Bảo dưỡng, sửa chữa chuẩn Thụy Sĩ.",
      icon: Wrench,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1A1A1A]">
      {/* ========================================================================= */}
      {/* 01. HERO BANNER: OUR STORY */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-[#EAE5DD] py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#F6F2EA] via-[#F6F1E8] to-[#EAE0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#8C5824] block">
                OUR STORY
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1A1A] leading-[1.1]">
                Every Timepiece <br />
                Has a Story. <br />
                So Do We.
              </h1>

              <p className="text-sm sm:text-base text-[#5A4A3D] max-w-md leading-relaxed font-light">
                Từ năm 2019, Kenny Luxury không chỉ mang đến những cỗ máy thời gian danh tiếng mà còn đồng hành cùng khách hàng trên hành trình giữ gìn những giá trị vượt thời gian.
              </p>

              <div className="pt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#8C5824] font-medium">
                <span>SCROLL</span>
                <span className="font-mono text-base transform translate-x-1 animate-pulse">⟶</span>
              </div>
            </div>

            {/* Right Showroom Interior Photo */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-xl group">
                <Image
                  src="/images/showroom-lounge.jpg"
                  alt="Kenny Luxury VIP Boutique Showroom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 01. OUR STORY DETAILS */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EAE5DD]">
        <div className="flex items-start gap-3 mb-10 pb-4 border-b border-[#EAE5DD]">
          <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">01</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
              OUR STORY
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed font-light">
              Kenny Luxury được thành lập vào năm 2019 bởi những người đam mê đồng hồ và trân trọng giá trị của thời gian.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Chúng tôi tin rằng một chiếc đồng hồ xa xỉ không chỉ là phụ kiện, mà là di sản, là biểu tượng của đẳng cấp và phong cách sống.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Với sứ mệnh mang đến những sản phẩm chính hãng, dịch vụ chuyên nghiệp và trải nghiệm tinh tế, Kenny Luxury đã trở thành điểm đến tin cậy của cộng đồng khách hàng và nhà sưu tầm trên khắp Việt Nam.
            </p>

            <div className="pt-2">
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 border border-[#8C5824] hover:bg-[#8C5824] text-[#8C5824] hover:text-white px-7 py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.18em] transition-all"
              >
                <span>KHÁM PHÁ SHOWROOM</span>
                <span>⟶</span>
              </Link>
            </div>
          </div>

          {/* Right Storefront Photo with Vertical Text Accent */}
          <div className="lg:col-span-7 relative flex items-center">
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-lg group">
              <Image
                src="/images/showroom-entrance.jpg"
                alt="Kenny Luxury Facade"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="hidden lg:block absolute -right-12 rotate-90 origin-bottom-right text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 font-medium">
              TIMELESS VALUES, TRUE LUXURY
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. OUR PHILOSOPHY (Giá trị chúng tôi theo đuổi) - Re-styled matching design */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F6F2EA] border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-12 pb-4 border-b border-[#EAE5DD]">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">02</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                OUR PHILOSOPHY
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                Giá trị chúng tôi theo đuổi
              </p>
            </div>
          </div>

          {/* Seamless 4-Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE5DD]">
            {philosophyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`space-y-3 text-center px-4 pt-4 sm:pt-0 ${idx !== 0 ? "sm:pl-6" : ""
                    }`}
                >
                  <div className="w-12 h-12 text-[#8C5824] flex items-center justify-center mx-auto mb-2">
                    <IconComp size={28} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#8C5824] uppercase tracking-[0.2em] block">
                      {item.code}
                    </span>
                    <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. OUR SHOWROOM (Không gian trải nghiệm) */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EAE5DD]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">03</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                OUR SHOWROOM
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                Không gian trải nghiệm
              </p>
            </div>
          </div>
          <p className="text-xs text-neutral-500 max-w-md font-light leading-relaxed mt-4 md:mt-0">
            Showroom Kenny Luxury được thiết kế theo phong cách hiện đại và sang trọng, mang đến không gian riêng tư, đẳng cấp cho từng khách hàng.
          </p>
        </div>

        {/* Showroom Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[280px] rounded-sm overflow-hidden border border-[#EAE5DD] shadow-sm group">
            <Image
              src="/images/showroom-lounge.jpg"
              alt="Kenny Luxury VIP Lounge"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {showroomSubSpaces.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm overflow-hidden border border-[#EAE5DD] shadow-xs group hover:border-[#8C5824] transition-colors flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
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
      </section>

      {/* ========================================================================= */}
      {/* 04. THE EXPERIENCE - Re-styled matching design */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F6F2EA] border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Watch Macro Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
              <Image
                src="/images/faq-watch.jpg"
                alt="The Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Text & 3 Sub-Features with thin vertical dividers */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">04</span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                    THE EXPERIENCE
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Bước vào Kenny Luxury, không chỉ là lựa chọn một chiếc đồng hồ, đó là trải nghiệm được tư vấn chuyên sâu, kiểm định minh bạch và đồng hành trọn đời trong một không gian tinh tế và chuyên nghiệp.
              </p>

              {/* 3 Columns divided by thin lines */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#EAE5DD] divide-y sm:divide-y-0 sm:divide-x divide-[#EAE5DD]">
                <div className="space-y-2 text-center px-2">
                  <Headphones size={22} strokeWidth={1.5} className="text-[#8C5824] mx-auto" />
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                    TƯ VẤN CHUYÊN SÂU
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-snug">
                    Hiểu nhu cầu, đề xuất phù hợp.
                  </p>
                </div>

                <div className="space-y-2 text-center px-2 pt-4 sm:pt-0">
                  <Search size={22} strokeWidth={1.5} className="text-[#8C5824] mx-auto" />
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                    KIỂM ĐỊNH MINH BẠCH
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-snug">
                    Quy trình kiểm tra chặt chẽ, rõ ràng.
                  </p>
                </div>

                <div className="space-y-2 text-center px-2 pt-4 sm:pt-0">
                  <Heart size={22} strokeWidth={1.5} className="text-[#8C5824] mx-auto" />
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                    ĐỒNG HÀNH TRỌN ĐỜI
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-snug">
                    Hỗ trợ, bảo hành và chăm sóc dài lâu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. OUR JOURNEY (Hành trình phát triển) - Re-styled with Timeline Nodes */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EAE5DD]">
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#EAE5DD]">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">05</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                OUR JOURNEY
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                Hành trình phát triển
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setJourneyIndex((prev) => (prev > 0 ? prev - 1 : 0))}
              className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] flex items-center justify-center text-neutral-600 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setJourneyIndex((prev) => (prev < journeyMilestones.length - 1 ? prev + 1 : prev))}
              className="w-8 h-8 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] flex items-center justify-center text-neutral-600 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Timeline with horizontal line & nodes */}
        <div className="relative pt-6">
          {/* Horizontal Line across all years */}
          <div className="hidden lg:block absolute top-[27px] left-[8%] right-[8%] h-px bg-[#D5CEC2] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {journeyMilestones.map((m, idx) => (
              <div
                key={m.year}
                className={`flex flex-col items-center text-center space-y-3 cursor-pointer group transition-all ${journeyIndex === idx ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                onClick={() => setJourneyIndex(idx)}
              >
                {/* Year Title */}
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] group-hover:text-[#8C5824] transition-colors">
                  {m.year}
                </span>

                {/* Timeline Dot Node */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#8C5824] border-2 border-white ring-2 ring-[#8C5824]/30 my-1 flex-shrink-0" />

                {/* Details */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    {m.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light max-w-[200px] mx-auto">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. WHY KENNY LUXURY (Vì sao chọn chúng tôi?) - Re-styled without white boxes */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F6F2EA] border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-12 pb-4 border-b border-[#EAE5DD]">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">06</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                WHY KENNY LUXURY
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                Vì sao chọn chúng tôi?
              </p>
            </div>
          </div>

          {/* 6 Columns separated by thin lines */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE5DD] text-center">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`space-y-3 px-2 pt-4 sm:pt-0 ${idx !== 0 ? "sm:pl-4" : ""}`}
                >
                  <div className="w-10 h-10 text-[#8C5824] flex items-center justify-center mx-auto mb-1">
                    <IconComp size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. EXPERIENCE KENNY LUXURY BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#EDE7DC] border-t border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                EXPERIENCE KENNY LUXURY
              </h3>
              <p className="text-xs text-[#8C5824] tracking-widest uppercase font-medium mt-1">
                Khám phá không gian và trải nghiệm dịch vụ đẳng cấp tại Kenny Luxury.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/lien-he"
                className="bg-[#8C5824] hover:bg-[#724419] text-white px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] shadow-sm transition-all hover:scale-105"
              >
                KHÁM PHÁ SHOWROOM
              </Link>
              <Link
                href="/lien-he#booking"
                className="border border-[#D5CEC2] hover:border-[#8C5824] bg-white text-[#1A1A1A] px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              >
                LIÊN HỆ TƯ VẤN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
