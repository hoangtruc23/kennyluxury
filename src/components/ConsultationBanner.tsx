import React from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

interface ConsultationBannerProps {
  brandName?: string;
}

export default function ConsultationBanner({
  brandName = "Rolex",
}: ConsultationBannerProps) {
  return (
    <section className="my-14 rounded-sm border border-[#EAE5DD] bg-gradient-to-r from-[#F6F2EA] via-[#F6F2EA] to-[#EDE7DC] p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C5824]">
          PRIVATE CONSULTATION
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal uppercase">
          TÌM KIẾM CHIẾC {brandName} DÀNH RIÊNG CHO BẠN?
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Đội ngũ chuyên gia tại Kenny Luxury đồng hành cùng bạn trong việc lựa chọn thiết kế, bộ sưu tập và phiên bản phù hợp với phong cách riêng.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="tel:0906 222 222"
            className="inline-flex items-center gap-2 bg-[#8C5824] hover:bg-[#724419] text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 rounded-sm shadow-sm transition-all"
          >
            <Phone size={14} />
            <span>0906 222 222</span>
          </Link>

          <Link
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#1A1A1A] border border-[#D5CEC2] text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 rounded-sm transition-all"
          >
            <MessageCircle size={14} />
            <span>TƯ VẤN QUA ZALO</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
