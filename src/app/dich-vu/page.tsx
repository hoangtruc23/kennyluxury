"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Search,
  FileText,
  CheckCircle,
  ShieldCheck,
  Gem,
  Lock,
  UserCheck,
  Headphones,
  Award,
  Users,
  Coffee,
  ShieldAlert,
  Play,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      title: "THU MUA",
      desc: "Định giá minh bạch, cạnh tranh và thanh toán nhanh chóng.",
      image: "/images/showroom-hero.jpg",
      link: "/lien-he#booking",
      imageFirst: true,
    },
    {
      num: "02",
      title: "KÝ GỬI",
      desc: "Tiếp cận mạng lưới khách hàng cao cấp và tiềm năng.",
      image: "/images/faq-watch.jpg",
      link: "/lien-he#booking",
      imageFirst: false,
    },
    {
      num: "03",
      title: "TRADE-IN",
      desc: "Nâng cấp bộ sưu tập của bạn với quy trình linh hoạt.",
      image: "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
      link: "/lien-he#booking",
      imageFirst: true,
    },
    {
      num: "04",
      title: "SPA ĐỒNG HỒ",
      desc: "Kiểm tra, vệ sinh và bảo dưỡng theo tiêu chuẩn Thụy Sĩ.",
      image: "/images/skeleton-watch.jpg",
      link: "/lien-he#booking",
      imageFirst: false,
    },
  ];

  const processSteps = [
    {
      title: "LIÊN HỆ",
      desc: "Liên hệ qua hotline, form hoặc đến trực tiếp showroom.",
      icon: Phone,
    },
    {
      title: "KIỂM ĐỊNH & TƯ VẤN",
      desc: "Đội ngũ chuyên gia kiểm tra, đánh giá và tư vấn giải pháp tối ưu.",
      icon: Search,
    },
    {
      title: "THỎA THUẬN MINH BẠCH",
      desc: "Định giá và thỏa thuận rõ ràng, đảm bảo quyền lợi của bạn.",
      icon: FileText,
    },
    {
      title: "HOÀN TẤT GIAO DỊCH",
      desc: "Thanh toán nhanh chóng hoặc ký gửi theo thỏa thuận.",
      icon: CheckCircle,
    },
  ];

  const whyChooseUs = [
    {
      title: "CHÍNH HÃNG 100%",
      desc: "Cam kết đồng hồ chính hãng tuyệt đối.",
      icon: ShieldCheck,
    },
    {
      title: "ĐỊNH GIÁ MINH BẠCH",
      desc: "Định giá công bằng dựa trên thị trường và tình trạng thực tế.",
      icon: Gem,
    },
    {
      title: "GIAO DỊCH BẢO MẬT",
      desc: "Bảo mật thông tin khách hàng và giao dịch tuyệt đối.",
      icon: Lock,
    },
    {
      title: "CHUYÊN GIA TƯ VẤN",
      desc: "Đội ngũ giàu kinh nghiệm, am hiểu thị trường đồng hồ xa xỉ.",
      icon: UserCheck,
    },
    {
      title: "HỖ TRỢ NHANH",
      desc: "Phản hồi nhanh chóng, hỗ trợ tận tâm 24/7.",
      icon: Headphones,
    },
    {
      title: "HẬU MÃI DÀI LÂU",
      desc: "Đồng hành cùng bạn trong suốt quá trình sử dụng.",
      icon: Award,
    },
  ];

  const faqs = [
    {
      q: "Trade-in mất bao lâu để hoàn tất?",
      a: "Quy trình Trade-in lên đời tại Kenny Luxury diễn ra vô cùng nhanh chóng trong khoảng 15-30 phút. Đội ngũ kỹ thuật sẽ kiểm tra tình trạng đồng hồ cũ, đưa ra mức giá định giá cao nhất thị trường và hỗ trợ bạn đổi sang cỗ máy thời gian mới ngay tại chỗ.",
    },
    {
      q: "Ký gửi tính phí như thế nào?",
      a: "Mức phí ký gửi được niêm yết minh bạch theo từng giá trị sản phẩm. Chúng tôi cam kết bảo quản đồng hồ trong két an toàn chuẩn Thụy Sĩ, chụp ảnh studio cao cấp và quảng bá tới mạng lưới hàng ngàn nhà sưu tầm uy tín.",
    },
    {
      q: "Dịch vụ Spa đồng hồ gồm những gì?",
      a: "Quy trình Spa đồng hồ bao gồm: lau dầu, căn chỉnh sai số cơ học bằng máy đo chuyên dụng, đánh bóng thẩm mỹ khôi phục độ mới 98%, kiểm tra độ chống nước và thay thế linh kiện chính hãng nếu có nhu cầu.",
    },
    {
      q: "Thu mua đồng hồ cần những giấy tờ gì?",
      a: "Quý khách chỉ cần mang theo đồng hồ cùng các phụ kiện đi kèm (nếu có) như Hộp, Sổ thẻ bảo hành (Fullset) và giấy tờ tùy thân (CCCD/CMND) để hoàn tất thủ tục thu mua nhận tiền liền tay.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A]">
      {/* ========================================================================= */}
      {/* 01. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-[#EAE5DD] py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#FBF9F5] via-[#F6F1E8] to-[#EAE0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#8C5824] block">
                OUR SERVICES
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1A1A] leading-[1.1]">
                Services <br />
                Beyond Time.
              </h1>

              <p className="text-sm sm:text-base text-[#5A4A3D] max-w-lg leading-relaxed font-light">
                Không chỉ cung cấp những cỗ máy thời gian danh tiếng, Kenny Luxury còn mang đến hệ sinh thái dịch vụ toàn diện dành cho các nhà sưu tầm.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/lien-he#booking"
                  className="bg-[#8C5824] hover:bg-[#724419] text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-all hover:scale-105"
                >
                  LIÊN HỆ TƯ VẤN
                </Link>

                <button
                  onClick={() => alert("Video giới thiệu Kenny Luxury Service")}
                  className="inline-flex items-center gap-2.5 border border-[#D5CEC2] hover:border-[#8C5824] bg-white text-[#1A1A1A] px-7 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.15em] transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-[#8C5824] text-white flex items-center justify-center">
                    <Play size={10} className="fill-white translate-x-0.5" />
                  </div>
                  <span>XEM VIDEO GIỚI THIỆU</span>
                </button>
              </div>
            </div>

            {/* Right Watchmaker Macro Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-xl group">
                <Image
                  src="/images/skeleton-watch.jpg"
                  alt="Kenny Luxury Precision Watchmaker"
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
      {/* 02. OUR SERVICES (HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN) */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EAE5DD]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#EAE5DD]">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">02</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                OUR SERVICES
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN
              </p>
            </div>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] font-bold transition-colors mt-4 md:mt-0 group"
          >
            <span>TÌM HIỂU THÊM</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.num}
              className="bg-[#F6F2EA] border border-[#EAE5DD] rounded-sm overflow-hidden flex flex-col sm:flex-row items-stretch group hover:border-[#8C5824] transition-all shadow-xs"
            >
              {/* Image half */}
              <div
                className={`relative w-full sm:w-1/2 h-52 sm:h-auto overflow-hidden bg-white ${
                  item.imageFirst ? "order-1" : "order-1 sm:order-2"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content half */}
              <div
                className={`p-6 sm:p-8 w-full sm:w-1/2 flex flex-col justify-between space-y-4 ${
                  item.imageFirst ? "order-2" : "order-2 sm:order-1"
                }`}
              >
                <div className="space-y-2">
                  <span className="font-serif text-2xl text-[#8C5824] font-light block">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-xl text-[#1A1A1A] font-normal tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#8C5824] hover:text-[#724419] transition-colors group/link"
                  >
                    <span>TÌM HIỂU THÊM</span>
                    <ArrowRight size={13} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. SERVICE PROCESS (QUY TRÌNH DỊCH VỤ MINH BẠCH) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F6F2EA] border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-start gap-3 mb-14 pb-4 border-b border-[#EAE5DD]">
            <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">03</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                SERVICE PROCESS
              </h2>
              <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                QUY TRÌNH DỊCH VỤ MINH BẠCH
              </p>
            </div>
          </div>

          {/* Process Timeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative space-y-4 text-center group">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white border border-[#EAE5DD] text-[#8C5824] flex items-center justify-center mx-auto shadow-xs group-hover:border-[#8C5824] group-hover:bg-[#8C5824] group-hover:text-white transition-all">
                    <IconComp size={24} />
                  </div>

                  <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pt-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed font-light max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. WHY CHOOSE OUR SERVICE (DARK BRONZE SECTION) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#4F3F34] text-white border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-start gap-3 mb-14 pb-4 border-b border-white/20">
            <span className="text-xs font-mono font-bold text-[#D4AF37] pt-1">04</span>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wider uppercase font-normal">
                WHY CHOOSE OUR SERVICE
              </h2>
              <p className="text-[11px] text-[#D4AF37] uppercase tracking-[0.2em] font-bold mt-0.5">
                VÌ SAO CHỌN KENNY LUXURY
              </p>
            </div>
          </div>

          {/* 6 Feature Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="space-y-3 p-4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-white/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-1">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. LUXURY EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EAE5DD]">
        {/* Header */}
        <div className="flex items-start gap-3 mb-10 pb-4 border-b border-[#EAE5DD]">
          <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">05</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
              LUXURY EXPERIENCE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Showroom Lounge Photo */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
            <Image
              src="/images/showroom-lounge.jpg"
              alt="Kenny Luxury VIP Private Lounge"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Text & 3 Badges */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-snug">
              Trải nghiệm dịch vụ đẳng cấp <br />
              trong không gian riêng tư.
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Mỗi giao dịch tại Kenny Luxury đều được thực hiện trong không gian riêng tư, chuyên nghiệp và bảo mật, mang đến sự an tâm tuyệt đối cho mọi khách hàng.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE5DD]">
              <div className="p-4 bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] space-y-2 text-center">
                <Users size={20} className="text-[#8C5824] mx-auto" />
                <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase">
                  Không gian riêng tư
                </h4>
                <p className="text-[10px] text-neutral-500">
                  Phòng VIP sang trọng, đón tiếp chu đáo.
                </p>
              </div>

              <div className="p-4 bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] space-y-2 text-center">
                <Coffee size={20} className="text-[#8C5824] mx-auto" />
                <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase">
                  Trải nghiệm tinh tế
                </h4>
                <p className="text-[10px] text-neutral-500">
                  Thư giãn với đồ uống cao cấp.
                </p>
              </div>

              <div className="p-4 bg-[#F6F2EA] rounded-sm border border-[#EAE5DD] space-y-2 text-center">
                <ShieldAlert size={20} className="text-[#8C5824] mx-auto" />
                <h4 className="font-serif text-xs font-bold text-[#1A1A1A] uppercase">
                  Bảo mật tuyệt đối
                </h4>
                <p className="text-[10px] text-neutral-500">
                  Thông tin và giao dịch được bảo mật 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. FAQ (CÂU HỎI THƯỜNG GẶP) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F6F2EA] border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EAE5DD]">
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono font-bold text-[#8C5824] pt-1">06</span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                  FAQ
                </h2>
                <p className="text-[11px] text-[#8C5824] uppercase tracking-[0.2em] font-bold mt-0.5">
                  CÂU HỎI THƯỜNG GẶP
                </p>
              </div>
            </div>
            <Link
              href="/lien-he#faq"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#8C5824] font-bold transition-colors mt-4 md:mt-0 group"
            >
              <span>XEM TẤT CẢ CÂU HỎI</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#EAE5DD] rounded-sm bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex justify-between items-center text-left hover:bg-[#FBF9F5] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A] pr-4">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#D5CEC2] flex items-center justify-center text-[#8C5824] flex-shrink-0">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. EXPERIENCE PREMIUM SERVICE BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#EDE7DC] border-t border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                EXPERIENCE PREMIUM SERVICE
              </h3>
              <p className="text-xs text-[#8C5824] tracking-widest uppercase font-medium mt-1">
                Kenny Luxury sẵn sàng đồng hành cùng bạn.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/lien-he"
                className="bg-[#8C5824] hover:bg-[#724419] text-white px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] shadow-sm transition-all hover:scale-105"
              >
                LIÊN HỆ TƯ VẤN
              </Link>
              <Link
                href="/lien-he#booking"
                className="border border-[#D5CEC2] hover:border-[#8C5824] bg-white text-[#1A1A1A] px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              >
                ĐẶT LỊCH SHOWROOM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
