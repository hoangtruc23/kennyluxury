"use client";

import React from "react";
import { ShieldCheck, FileText, Repeat, Wrench, Award, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "CAM KẾT CHÍNH HÃNG",
      desc: "100% sản phẩm chính hãng, có đầy đủ giấy tờ.",
      icon: ShieldCheck,
    },
    {
      title: "MINH BẠCH",
      desc: "Thông tin rõ ràng, nguồn gốc xuất xứ minh bạch.",
      icon: FileText,
    },
    {
      title: "TRADE-IN",
      desc: "Hỗ trợ thu cũ đổi mới với giá trị tốt nhất.",
      icon: Repeat,
    },
    {
      title: "SPA ĐỒNG HỒ",
      desc: "Bảo dưỡng chuyên sâu, chuẩn Thụy Sĩ.",
      icon: Wrench,
    },
    {
      title: "HẬU MÃI DÀI LÂU",
      desc: "Hỗ trợ sau bán hàng tận tâm.",
      icon: Award,
    },
    {
      title: "TƯ VẤN CHUYÊN SÂU",
      desc: "Đội ngũ chuyên gia tư vấn kỹ lưỡng và tận tâm.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#EAE5DD]">
      {/* Header */}
      <div className="flex items-start gap-3 mb-12 pb-4 border-b border-[#EAE5DD]">
        <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">06</span>
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
            VÌ SAO CHỌN KENNY LUXURY
          </h2>
        </div>
      </div>

      {/* 6 Grid items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {reasons.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-sm border border-[#EAE5DD] bg-white shadow-xs space-y-3 hover:border-[#8C5824] transition-all group flex flex-col items-center justify-start min-h-[190px]"
            >
              <div className="w-12 h-12 rounded-full bg-[#F6F2EA] text-[#8C5824] group-hover:bg-[#8C5824] group-hover:text-white flex items-center justify-center transition-colors">
                <IconComp size={22} />
              </div>
              <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pt-1">
                {item.title}
              </h3>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
