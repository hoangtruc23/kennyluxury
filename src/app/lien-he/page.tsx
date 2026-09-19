"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Booking Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "59B Mạc Đĩnh Chi, Quận 1, TP. HCM",
    time: "10:30",
    date: "",
    note: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Gallery slider state
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryItems = [
    {
      title: "MẶT TIỀN SHOWROOM",
      image: "/images/showroom-entrance.jpg",
    },
    {
      title: "KHU TRƯNG BÀY",
      image: "/images/showroom-hero.jpg",
    },
    {
      title: "PHÒNG VIP",
      image: "/images/showroom-lounge.jpg",
    },
    {
      title: "KHU VỰC CHECK-IN",
      image: "/images/showroom-entrance.jpg",
    },
    {
      title: "KHU TRƯNG BÀY ĐỒNG HỒ",
      image: "/images/showroom-hero.jpg",
    },
  ];

  const faqs = [
    {
      q: "Các dịch vụ tại Kenny Luxury showroom có những gì?",
      a: "Khách hàng đến với Kenny Luxury được tận hưởng trọn vẹn dịch vụ thượng khách 1:1 trong không gian VIP Lounge riêng tư: trải nghiệm thử đồng hồ trực tiếp trên tay, thẩm định đồng hồ chính hãng, tư vấn chuyên sâu về các dòng sản phẩm hiếm (Rolex, Patek Philippe, Audemars Piguet), hỗ trợ giao lưu lên đời (Trade-in) và spa, bảo dưỡng kỹ thuật tiêu chuẩn Thụy Sĩ.",
    },
    {
      q: "Showroom có hỗ trợ xem và thử không?",
      a: "Có. Tất cả các mẫu đồng hồ có sẵn đều được chuẩn bị sẵn sàng trong tủ kính đạt chuẩn bảo quản nhiệt độ và độ ẩm. Chuyên viên sẽ phục vụ găng tay chuyên dụng và khay nhung để quý khách trực tiếp lên tay và kiểm tra độ hoàn thiện chi tiết.",
    },
    {
      q: "Có thể đặt lịch hẹn trước khi đến không?",
      a: "Chúng tôi khuyến khích quý khách đặt lịch trước qua form trên website hoặc hotline 09 3333 6789. Đội ngũ cố vấn sẽ chuẩn bị trước các mẫu đồng hồ theo mong muốn và dành riêng không gian VIP đón tiếp chu đáo.",
    },
    {
      q: "Kenny Luxury có chế độ bảo hành riêng không?",
      a: "Bên cạnh chế độ bảo hành quốc tế từ nhà sản xuất, Kenny Luxury áp dụng chính sách bảo hành độc quyền lên đến 5 năm, bao gồm miễn phí bảo dưỡng lau dầu định kỳ, kiểm tra sai số cơ học bằng máy chuyên dụng và cam kết thu mua trọn đời.",
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền họ tên và số điện thoại.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A]">
      {/* 01. HERO: CONNECT / VISIT OUR SHOWROOM */}
      <section className="relative border-b border-[#EAE5DD] py-16 md:py-24 bg-gradient-to-b from-[#FBF9F5] to-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-serif uppercase tracking-[0.3em] text-[#8C5824] font-bold block">
                CONNECT
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#1A1A1A] leading-[1.08] tracking-tight">
                Liên Hệ <br />
                Kenny Luxury
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light max-w-md">
                Chúng tôi luôn sẵn sàng đồng hành cùng bạn trong hành trình tìm
                kiếm cỗ máy thời gian phù hợp.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#booking"
                  className="bg-[#8C5824] hover:bg-[#724419] text-white px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.18em] shadow-sm transition-all hover:scale-105"
                >
                  ĐẶT LỊCH HẸN
                </a>

                <a
                  href="tel:0933336789"
                  className="inline-flex items-center gap-2 border border-[#D5CEC2] hover:border-[#8C5824] bg-white text-[#1A1A1A] px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.18em] transition-all"
                >
                  <Phone size={14} className="text-[#8C5824]" />
                  <span>GỌI NGAY</span>
                </a>
              </div>
            </div>

            {/* Right: Showroom Grand Entrance Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
                <Image
                  src="/images/showroom-entrance.jpg"
                  alt="Kenny Luxury Showroom Front Facade"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. THÔNG TIN LIÊN HỆ */}
      <section className="py-20 border-b border-[#EAE5DD] bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#8C5824] font-bold">
                  02
                </span>
                <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
                  THÔNG TIN LIÊN HỆ
                </h2>
                <span className="h-px flex-1 bg-[#D5CEC2]" />
              </div>

              <div className="space-y-6">
                {/* ĐỊA CHỈ */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center flex-shrink-0 text-[#8C5824] shadow-xs">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                      ĐỊA CHỈ
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#1A1A1A] font-medium leading-relaxed">
                      59B Mạc Đĩnh Chi, P. Tân Định, <br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                {/* HOTLINE */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center flex-shrink-0 text-[#8C5824] shadow-xs">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                      HOTLINE
                    </span>
                    <a
                      href="tel:0933336789"
                      className="text-xs sm:text-[13px] text-[#1A1A1A] font-bold hover:text-[#8C5824] transition-colors block"
                    >
                      09 3333 6789
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center flex-shrink-0 text-[#8C5824] shadow-xs">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                      EMAIL
                    </span>
                    <a
                      href="mailto:info@kennyluxury.vn"
                      className="text-xs sm:text-[13px] text-[#1A1A1A] font-medium hover:text-[#8C5824] transition-colors block"
                    >
                      info@kennyluxury.vn
                    </a>
                  </div>
                </div>

                {/* GIỜ MỞ CỬA */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center flex-shrink-0 text-[#8C5824] shadow-xs">
                    <Clock size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                      GIỜ MỞ CỬA
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#1A1A1A] font-medium leading-relaxed">
                      09:00 – 20:00 | Tất cả các ngày trong tuần
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: VIP Lounge Photo */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
                <Image
                  src="/images/showroom-lounge.jpg"
                  alt="Kenny Luxury VIP Private Lounge"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. VỊ TRÍ SHOWROOM */}
      <section className="py-20 border-b border-[#EAE5DD] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-[#8C5824] font-bold">03</span>
            <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
              VỊ TRÍ SHOWROOM
            </h2>
            <span className="h-px flex-1 bg-[#D5CEC2]" />
          </div>

          <div className="relative bg-[#EFE9DF] border border-[#EAE5DD] rounded-sm p-8 sm:p-12 overflow-hidden shadow-sm">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Landmarks */}
              <div className="lg:col-span-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-sm border border-[#EAE5DD] shadow-2xs">
                    <span className="text-[10px] text-[#8C5824] font-bold block mb-1">
                      ● Nhà Thờ Đức Bà
                    </span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">
                      1.7 Km
                    </span>
                  </div>

                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-sm border border-[#EAE5DD] shadow-2xs">
                    <span className="text-[10px] text-[#8C5824] font-bold block mb-1">
                      ● Chợ Bến Thành
                    </span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">
                      1.2 Km
                    </span>
                  </div>

                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-sm border border-[#EAE5DD] shadow-2xs">
                    <span className="text-[10px] text-[#8C5824] font-bold block mb-1">
                      ● Dinh Độc Lập
                    </span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">
                      2.0 Km
                    </span>
                  </div>

                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-sm border border-[#EAE5DD] shadow-2xs">
                    <span className="text-[10px] text-[#8C5824] font-bold block mb-1">
                      ● Saigon Square
                    </span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">
                      1.5 Km
                    </span>
                  </div>
                </div>
              </div>

              {/* Center: Main Store Pin Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white p-6 rounded-sm border-2 border-[#8C5824] shadow-xl text-center max-w-sm space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#8C5824] text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <span className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A] block">
                    KENNY LUXURY
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    59B Mạc Đĩnh Chi, P. Tân Định, <br />
                    Quận 1, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* Right: Directions Button */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <a
                  href="https://maps.google.com/?q=59B+M%E1%BA%A1c+%C4%90%C4%A9nh+Chi,+T%C3%A2n+%C4%90%E1%BB%8Bnh,+Qu%E1%BA%ADn+1,+H%E1%BB%93+Ch%C3%AD+Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-neutral-50 text-[#1A1A1A] border border-[#D5CEC2] hover:border-[#8C5824] px-7 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] shadow-sm transition-all group"
                >
                  <span>CHỈ ĐƯỜNG BẰNG GOOGLE MAPS</span>
                  <ArrowRight
                    size={15}
                    className="text-[#8C5824] transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. ĐẶT LỊCH HẸN */}
      <section className="py-20 border-b border-[#EAE5DD] bg-[#FBF9F5]" id="booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-[#8C5824] font-bold">04</span>
            <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
              ĐẶT LỊCH HẸN
            </h2>
            <span className="h-px flex-1 bg-[#D5CEC2]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Để chúng tôi phục vụ bạn tốt hơn, vui lòng để lại thông tin để
                đặt lịch showroom.
              </p>

              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
                <Image
                  src="/images/skeleton-watch.jpg"
                  alt="Kenny Luxury Haute Horlogerie Tourbillon"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-white border border-[#EAE5DD] p-10 rounded-sm text-center space-y-4 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#F6F2EA] text-[#8C5824] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1A1A] font-bold">
                    Đặt Lịch Hẹn Thành Công!
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn quý khách <strong>{formData.name}</strong>. Cố vấn của
                    Kenny Luxury sẽ liên hệ lại qua số <strong>{formData.phone}</strong> trong
                    vòng 15 phút để xác nhận chi tiết lịch hẹn tại phòng VIP.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#8C5824] underline uppercase tracking-wider"
                  >
                    Đặt lịch khác
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBookingSubmit}
                  className="space-y-4 bg-white p-6 sm:p-8 rounded-sm border border-[#EAE5DD] shadow-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên *"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại *"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
                      />
                    </div>
                    <div>
                      <select
                        aria-label="Chọn chi nhánh"
                        value={formData.branch}
                        onChange={(e) =>
                          setFormData({ ...formData, branch: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors cursor-pointer"
                      >
                        <option value="59B Mạc Đĩnh Chi, Quận 1, TP. HCM">
                          59B Mạc Đĩnh Chi, Quận 1, TP. HCM
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <select
                        aria-label="Thời gian mong muốn"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors cursor-pointer"
                      >
                        <option value="09:30">09:30</option>
                        <option value="10:30">10:30</option>
                        <option value="14:00">14:00</option>
                        <option value="15:30">15:30</option>
                        <option value="17:00">17:00</option>
                        <option value="18:30">18:30</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="date"
                        aria-label="Chọn ngày hẹn"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Nội dung / yêu cầu (Ví dụ: Muốn xem Rolex Yacht-Master hoặc Patek Philippe...)"
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      className="w-full text-xs p-3.5 border border-[#EAE5DD] rounded-sm bg-[#FBF9F5] focus:bg-white focus:outline-none focus:border-[#8C5824] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8C5824] hover:bg-[#724419] text-white py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] shadow-sm transition-all"
                  >
                    ĐẶT LỊCH HẸN
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 05. KHÔNG GIAN SHOWROOM */}
      <section className="py-20 border-b border-[#EAE5DD] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4 flex-1">
              <span className="font-mono text-xs text-[#8C5824] font-bold">05</span>
              <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
                KHÔNG GIAN SHOWROOM
              </h2>
              <span className="h-px flex-1 bg-[#D5CEC2] hidden sm:block" />
            </div>

            <div className="flex items-center gap-2 pl-4">
              <button
                onClick={() =>
                  setActiveGalleryIndex((prev) =>
                    prev > 0 ? prev - 1 : galleryItems.length - 1
                  )
                }
                aria-label="Xem ảnh trước"
                className="w-8 h-8 rounded-sm border border-[#D5CEC2] bg-white hover:border-[#8C5824] flex items-center justify-center text-[#1A1A1A] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setActiveGalleryIndex((prev) =>
                    prev < galleryItems.length - 1 ? prev + 1 : 0
                  )
                }
                aria-label="Xem ảnh tiếp theo"
                className="w-8 h-8 rounded-sm border border-[#D5CEC2] bg-white hover:border-[#8C5824] flex items-center justify-center text-[#1A1A1A] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-3 rounded-sm border transition-all duration-300 group ${
                  activeGalleryIndex === idx
                    ? "border-[#8C5824] shadow-md ring-1 ring-[#8C5824]/20"
                    : "border-[#EAE5DD] hover:border-[#8C5824]"
                }`}
              >
                <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] text-center truncate">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CÂU HỎI THƯỜNG GẶP */}
      <section className="py-20 border-b border-[#EAE5DD] bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-[#8C5824] font-bold">06</span>
            <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <span className="h-px flex-1 bg-[#D5CEC2]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
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
                      <span className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] pr-4">
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

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#EAE5DD] shadow-md group">
                <Image
                  src="/images/faq-watch.jpg"
                  alt="Kenny Luxury Prestigious Horology"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="font-serif text-base tracking-[0.25em] text-white font-bold uppercase">
                    KENNY LUXURY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. PRE-FOOTER BANNER */}
      <section className="border-b border-[#EAE5DD] bg-gradient-to-r from-[#F6F2EA] via-[#FBF9F5] to-[#EDE7DC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] tracking-wider uppercase font-normal">
                WE LOOK FORWARD TO WELCOMING YOU
              </h3>
              <p className="text-xs text-[#8C5824] tracking-widest uppercase font-medium mt-1">
                Experience Kenny Luxury
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0933336789"
                className="bg-[#8C5824] hover:bg-[#724419] text-white px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] shadow-sm transition-all hover:scale-105"
              >
                LIÊN HỆ TƯ VẤN
              </a>
              <a
                href="#booking"
                className="border border-[#D5CEC2] hover:border-[#8C5824] bg-white text-[#1A1A1A] px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              >
                ĐẶT LỊCH SHOWROOM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
