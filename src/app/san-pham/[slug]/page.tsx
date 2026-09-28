import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { formatPrice, toSlug } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Award,
  ChevronRight,
  ClipboardCheck,
  Settings,
} from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) =>
      toSlug(p.brand) === toSlug(product.brand) &&
      toSlug(p.collection) === toSlug(product.collection) &&
      p.id !== product.id
  ).slice(0, 4);

  const brandSlug = toSlug(product.brand);
  const collectionSlug = toSlug(product.collection);

  const specItems = [
    { label: "Kích thước vỏ:", value: product.specs?.caseSize },
    { label: "Chất liệu vỏ:", value: product.specs?.caseMaterial },
    { label: "Vành Bezel:", value: product.specs?.bezel },
    { label: "Mặt số:", value: product.specs?.dialColor },
    { label: "Bộ máy cơ:", value: product.specs?.movement },
    { label: "Dây đeo:", value: product.specs?.braceletMaterial },
    { label: "Khả năng chống nước:", value: product.specs?.waterResistance },
    { label: "Tình trạng:", value: product.specs?.condition, isHighlight: true },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1A1A1A] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-500 mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-[#8C5824] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <Link
            href={`/danh-muc/${brandSlug}/${collectionSlug}`}
            className="hover:text-[#8C5824] transition-colors"
          >
            {product.brand}
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <Link
            href={`/danh-muc/${brandSlug}/${collectionSlug}`}
            className="hover:text-[#8C5824] transition-colors"
          >
            {product.collection}
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="text-[#1A1A1A] font-medium truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Image Showcase */}
          <div className="relative aspect-square w-full bg-[#F6F2EA] border border-[#EAE5DD] rounded-sm overflow-hidden flex items-center justify-center p-8 sm:p-12 shadow-xs">
            <div className="relative w-full h-full max-w-md max-h-md">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Product Info & CTAs */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#8C5824] uppercase">
                {product.brand} • {product.collection}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] font-normal mt-2 leading-snug">
                {product.name}
              </h1>
              <p className="text-xs text-neutral-500 mt-2">
                Mã hiệu (Ref):{" "}
                <span className="text-[#1A1A1A] font-mono font-medium">
                  {product.referenceNumber}
                </span>
              </p>
            </div>

            {/* Price & Stock */}
            <div className="py-4 border-y border-[#EAE5DD] flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-xs sm:text-sm font-medium text-neutral-500">Giá:</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#8C5824]">
                  Liên hệ
                </span>
              </div>
              {/* <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                    product.stockStatus === "in_stock"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-[#8C5824]/10 text-[#8C5824] border-[#8C5824]/30"
                  }`}
                >
                  {product.stockStatus === "in_stock" ? "Có sẵn tại showroom" : "Đặt hàng"}
                </span>
              </div> */}
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://zalo.me/0906222222?text=Tôi quan tâm đến sản phẩm ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#8C5824] hover:bg-[#724419] text-white font-semibold uppercase tracking-wider py-4 rounded-sm transition-all text-xs shadow-sm hover:scale-[1.01]"
              >
                <MessageCircle size={18} />
                <span>Liên hệ tư vấn Zalo ngay</span>
              </a>

              <a
                href="tel:0906222222"
                className="w-full flex items-center justify-center gap-2 bg-[#F6F2EA] hover:bg-[#EFEBE4] text-[#1A1A1A] border border-[#8C5824] font-semibold uppercase tracking-wider py-4 rounded-sm transition-colors text-xs"
              >
                <Phone size={18} className="text-[#8C5824]" />
                <span>Hotline: 0906 222 222 (24/7)</span>
              </a>
            </div>

            {/* Guarantee badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE5DD] text-center text-xs text-neutral-600">
              <div className="flex flex-col items-center space-y-1.5">
                <ShieldCheck size={22} className="text-[#8C5824]" />
                <span className="text-[11px] font-medium">Cam kết chính hãng 100%</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5">
                <Award size={22} className="text-[#8C5824]" />
                <span className="text-[11px] font-medium">Bảo hành quốc tế</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5">
                <Clock size={22} className="text-[#8C5824]" />
                <span className="text-[11px] font-medium">Giao hàng toàn quốc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        {specItems.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-10 border-t border-[#EAE5DD]">
            <h2 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-6 uppercase tracking-wider">
              Thông Số Kỹ Thuật Chi Tiết
            </h2>
            <div className="border border-[#EAE5DD] rounded-sm overflow-hidden bg-transparent">
              <div className="divide-y divide-[#EAE5DD] text-xs sm:text-sm">
                {specItems.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-1 md:grid-cols-3 p-4 ${
                      index % 2 === 0 ? "bg-[#F6F2EA]" : "bg-[#EFEBE4]"
                    } hover:bg-[#ECE5D8] transition-colors`}
                  >
                    <span className="text-neutral-500 font-medium">{spec.label}</span>
                    <span
                      className={`md:col-span-2 font-medium ${
                        spec.isHighlight
                          ? "text-[#8C5824] font-semibold"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Warranty Policy Section */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#EAE5DD]">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="text-xs font-mono font-bold text-[#8C5824]">03</span>
            <span className="text-[#D5CEC2]">|</span>
            <h2 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-bold uppercase tracking-wider">
              CHÍNH SÁCH BẢO HÀNH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#EAE5DD] py-2">
            {/* Column 1: THỜI GIAN BẢO HÀNH */}
            <div className="lg:pr-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={24} className="text-[#8C5824] shrink-0" strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  THỜI GIAN BẢO HÀNH
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                Tất cả đồng hồ tại Kenny Luxury đều được bảo hành chính hãng từ 3 – 5 năm tùy theo tình trạng đồng hồ khi mua.
              </p>
            </div>

            {/* Column 2: ĐIỀU KIỆN BẢO HÀNH */}
            <div className="lg:px-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <ClipboardCheck size={24} className="text-[#8C5824] shrink-0" strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  ĐIỀU KIỆN BẢO HÀNH
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Bảo hành miễn phí cho các lỗi kỹ thuật do nhà sản xuất.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Không áp dụng cho các hư hỏng do tác động từ bên ngoài như va đập, rơi vỡ, vào nước, hoặc can thiệp từ bên thứ ba.</span>
                </li>
              </ul>
            </div>

            {/* Column 3: QUY TRÌNH BẢO HÀNH */}
            <div className="lg:px-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <Settings size={24} className="text-[#8C5824] shrink-0" strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  QUY TRÌNH BẢO HÀNH
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Liên hệ Kenny Luxury để được tư vấn hướng dẫn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Kiểm tra và xác nhận tình trạng đồng hồ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Sửa chữa và bảo dưỡng bởi đội ngũ kỹ thuật viên chuyên nghiệp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8C5824] leading-tight font-bold">•</span>
                  <span>Bàn giao đồng hồ sau khi hoàn tất bảo hành.</span>
                </li>
              </ul>
            </div>

            {/* Column 4: CAM KẾT */}
            <div className="lg:pl-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <Award size={24} className="text-[#8C5824] shrink-0" strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  CAM KẾT
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                Kenny Luxury cam kết mang đến dịch vụ hậu mãi tận tâm, giữ gìn giá trị và vẻ đẹp bền lâu của chiếc đồng hồ bạn sở hữu.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-10 border-t border-[#EAE5DD]">
            <h2 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-8 text-center uppercase tracking-wider">
              Sản Phẩm Cùng Bộ Sưu Tập
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
}
