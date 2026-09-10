import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeHero from "@/components/HomeHero";
import ProductGrid from "@/components/ProductGrid";
import ConsultationBanner from "@/components/ConsultationBanner";
import { PRODUCTS, BRANDS } from "@/lib/data";
import { ArrowRight, ShieldCheck, Award, Clock, Sparkles, Gem, Wrench } from "lucide-react";

export default function HomePage() {
  const featuredWatches = PRODUCTS.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A]">
      {/* 1. Hero Section matching sample image */}
      <HomeHero />

      {/* 2. Top Brands Showcase Strip */}
      <section className="py-14 border-b border-[#EAE5DD] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C5824] font-bold">
              HAUTE HORLOGERIE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal mt-1">
              Các Thương Hiệu Danh Tiếng
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                href={`/danh-muc/${b.slug}/yacht-master`}
                className="p-5 rounded-sm border border-[#EAE5DD] bg-white hover:border-[#8C5824] hover:shadow-md transition-all group flex flex-col items-center justify-center min-h-[90px]"
              >
                <span className="font-serif text-xs sm:text-sm tracking-wider text-[#1A1A1A] group-hover:text-[#8C5824] transition-colors font-bold uppercase">
                  {b.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                  {b.count} tuyệt tác
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Collection: Rolex Yacht-Master */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
          <div>
            <span className="text-[11px] text-[#8C5824] uppercase tracking-[0.25em] font-bold block mb-1">
              BỘ SƯU TẬP TIÊU BIỂU
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-normal">
              Rolex Yacht-Master Collection
            </h2>
          </div>
          <Link
            href="/danh-muc/rolex/yacht-master"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C5824] hover:text-[#724419] font-bold transition-colors mt-4 md:mt-0 group"
          >
            <span>Xem tất cả 20 sản phẩm</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <ProductGrid products={featuredWatches} columns={4} />
      </section>

      {/* 4. Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact">
        <ConsultationBanner brandName="Đồng Hồ Cao Cấp" />
      </div>

      {/* 5. Brand Services & Values */}
      <section className="py-16 bg-[#F6F2EA] border-t border-[#EAE5DD]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C5824] font-bold">
              KENNY LUXURY SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal mt-1">
              Đặc Quyền Dành Riêng Cho Khách Hàng
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-[#EAE5DD] rounded-sm bg-white shadow-sm space-y-3 text-center hover:border-[#8C5824] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F6F2EA] text-[#8C5824] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                100% Chính Hãng
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Mọi cỗ máy thời gian đều trải qua quy trình kiểm định 12 bước nghiêm ngặt trước khi đến tay khách hàng.
              </p>
            </div>

            <div className="p-8 border border-[#EAE5DD] rounded-sm bg-white shadow-sm space-y-3 text-center hover:border-[#8C5824] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F6F2EA] text-[#8C5824] flex items-center justify-center mx-auto mb-3">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                Bảo Hành Đến 5 Năm
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Cam kết bảo hành chính hãng tiêu chuẩn Thụy Sĩ cùng chính sách bảo dưỡng miễn phí định kỳ trọn đời.
              </p>
            </div>

            <div className="p-8 border border-[#EAE5DD] rounded-sm bg-white shadow-sm space-y-3 text-center hover:border-[#8C5824] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F6F2EA] text-[#8C5824] flex items-center justify-center mx-auto mb-3">
                <Clock size={24} />
              </div>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                Thu Mua &amp; Ký Gửi
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Định giá minh bạch trong 15 phút, hỗ trợ giao lưu lên đời (Trade-in) với mức chiết khấu cạnh tranh nhất.
              </p>
            </div>

            <div className="p-8 border border-[#EAE5DD] rounded-sm bg-white shadow-sm space-y-3 text-center hover:border-[#8C5824] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F6F2EA] text-[#8C5824] flex items-center justify-center mx-auto mb-3">
                <Wrench size={24} />
              </div>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                Spa &amp; Phục Chế
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Trang thiết bị căn chỉnh và máy đo sai số cơ học chuyên dụng đạt tiêu chuẩn nhà sản xuất tại Geneve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
