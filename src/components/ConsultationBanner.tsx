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
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C5824]">
          DỊCH VỤ THƯỢNG KHÁCH 1:1
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
          Đang tìm chiếc đồng hồ {brandName} phù hợp?
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Đội ngũ chuyên gia thẩm định và cố vấn đồng hồ cao cấp tại Kenny Luxury
          luôn sẵn sàng hỗ trợ tư vấn chọn mẫu, tra cứu số series và hẹn lịch xem
          đồng hồ trực tiếp tại phòng VIP.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="tel:0933336789"
            className="inline-flex items-center gap-2 bg-[#8C5824] hover:bg-[#724419] text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 rounded-sm shadow-sm transition-all"
          >
            <Phone size={14} />
            <span>09 3333 6789</span>
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
