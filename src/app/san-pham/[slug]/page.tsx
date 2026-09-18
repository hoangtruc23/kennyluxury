import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { formatPrice, toSlug } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid";
import { Phone, MessageCircle, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A] py-8 sm:py-12">
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
          <div className="relative aspect-square w-full bg-white border border-[#EAE5DD] rounded-sm overflow-hidden flex items-center justify-center p-8 sm:p-12 shadow-xs">
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
            <div className="py-4 border-y border-[#EAE5DD] flex items-baseline justify-between">
              <div>
                <span className="text-xs text-neutral-500 block">Giá bán:</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#8C5824]">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                    product.stockStatus === "in_stock"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-[#8C5824]/10 text-[#8C5824] border-[#8C5824]/30"
                  }`}
                >
                  {product.stockStatus === "in_stock" ? "Có sẵn tại showroom" : "Đặt hàng"}
                </span>
              </div>
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
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#1A1A1A] border border-[#8C5824] font-semibold uppercase tracking-wider py-4 rounded-sm transition-colors text-xs"
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
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#EAE5DD]">
          <h2 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-6 uppercase tracking-wider">
            Thông Số Kỹ Thuật Chi Tiết
          </h2>
          <div className="border border-[#EAE5DD] rounded-sm overflow-hidden bg-white shadow-xs">
            <div className="divide-y divide-[#EAE5DD] text-xs sm:text-sm">
              {product.specs.caseSize && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-white">
                  <span className="text-neutral-500 font-medium">Kích thước vỏ:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.caseSize}
                  </span>
                </div>
              )}
              {product.specs.caseMaterial && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#FBF9F5]">
                  <span className="text-neutral-500 font-medium">Chất liệu vỏ:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.caseMaterial}
                  </span>
                </div>
              )}
              {product.specs.bezel && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-white">
                  <span className="text-neutral-500 font-medium">Vành Bezel:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.bezel}
                  </span>
                </div>
              )}
              {product.specs.dialColor && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#FBF9F5]">
                  <span className="text-neutral-500 font-medium">Mặt số:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.dialColor}
                  </span>
                </div>
              )}
              {product.specs.movement && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-white">
                  <span className="text-neutral-500 font-medium">Bộ máy cơ:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.movement}
                  </span>
                </div>
              )}
              {product.specs.braceletMaterial && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#FBF9F5]">
                  <span className="text-neutral-500 font-medium">Dây đeo:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.braceletMaterial}
                  </span>
                </div>
              )}
              {product.specs.waterResistance && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-white">
                  <span className="text-neutral-500 font-medium">Khả năng chống nước:</span>
                  <span className="md:col-span-2 text-[#1A1A1A] font-medium">
                    {product.specs.waterResistance}
                  </span>
                </div>
              )}
              {product.specs.condition && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#FBF9F5]">
                  <span className="text-neutral-500 font-medium">Tình trạng:</span>
                  <span className="md:col-span-2 text-[#8C5824] font-semibold">
                    {product.specs.condition}
                  </span>
                </div>
              )}
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
