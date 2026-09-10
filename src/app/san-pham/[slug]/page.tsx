import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid";
import { Phone, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";

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
    (p) => p.collection === product.collection && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-400 mb-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <Link
            href={`/danh-muc/rolex/yacht-master`}
            className="hover:text-gold transition-colors"
          >
            {product.brand}
          </Link>
          <span>/</span>
          <span className="text-neutral-300">{product.collection}</span>
          <span>/</span>
          <span className="text-white truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image Gallery */}
          <div className="relative aspect-square w-full bg-[#080808] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-md max-h-md">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                {product.brand} • {product.collection}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mt-2 leading-snug">
                {product.name}
              </h1>
              <p className="text-xs text-neutral-400 mt-1">
                Mã hiệu (Ref):{" "}
                <span className="text-neutral-200 font-mono">
                  {product.referenceNumber}
                </span>
              </p>
            </div>

            {/* Price & Stock */}
            <div className="py-4 border-y border-white/10 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-neutral-500 block">Giá bán:</span>
                <span className="text-2xl sm:text-3xl font-bold text-gold">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                    product.stockStatus === "in_stock"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-gold/10 text-gold border-gold/30"
                  }`}
                >
                  {product.stockStatus === "in_stock" ? "Có sẵn" : "Đặt hàng"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://zalo.me/0906222222?text=Tôi quan tâm đến sản phẩm ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#d2a679] hover:bg-[#c49767] text-black font-semibold uppercase tracking-wider py-4 rounded transition-colors text-sm"
              >
                <MessageCircle size={18} />
                <span>Liên hệ tư vấn Zalo ngay</span>
              </a>

              <a
                href="tel:0906222222"
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold uppercase tracking-wider py-4 rounded transition-colors text-sm"
              >
                <Phone size={18} className="text-gold" />
                <span>Hotline: 0906 222 222 (24/7)</span>
              </a>
            </div>

            {/* Guarantee badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center text-xs text-neutral-400">
              <div className="flex flex-col items-center space-y-1">
                <ShieldCheck size={20} className="text-gold" />
                <span>Cam kết chính hãng 100%</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Award size={20} className="text-gold" />
                <span>Bảo hành quốc tế</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Clock size={20} className="text-gold" />
                <span>Giao hàng toàn quốc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <h2 className="font-serif text-2xl text-white font-semibold mb-6">
            Thông Số Kỹ Thuật Chi Tiết
          </h2>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="divide-y divide-white/10 text-sm">
              {product.specs.caseSize && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-black/40">
                  <span className="text-neutral-400 font-medium">Kích thước vỏ:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.caseSize}
                  </span>
                </div>
              )}
              {product.specs.caseMaterial && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#080808]">
                  <span className="text-neutral-400 font-medium">Chất liệu vỏ:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.caseMaterial}
                  </span>
                </div>
              )}
              {product.specs.bezel && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-black/40">
                  <span className="text-neutral-400 font-medium">Vành Bezel:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.bezel}
                  </span>
                </div>
              )}
              {product.specs.dialColor && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#080808]">
                  <span className="text-neutral-400 font-medium">Mặt số:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.dialColor}
                  </span>
                </div>
              )}
              {product.specs.movement && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-black/40">
                  <span className="text-neutral-400 font-medium">Bộ máy cơ:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.movement}
                  </span>
                </div>
              )}
              {product.specs.braceletMaterial && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#080808]">
                  <span className="text-neutral-400 font-medium">Dây đeo:</span>
                  <span className="md:col-span-2 text-white">
                    {product.specs.braceletMaterial}
                  </span>
                </div>
              )}
              {product.specs.condition && (
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-black/40">
                  <span className="text-neutral-400 font-medium">Tình trạng:</span>
                  <span className="md:col-span-2 text-gold font-semibold">
                    {product.specs.condition}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <h2 className="font-serif text-2xl text-white font-semibold mb-8 text-center">
              Sản Phẩm Cùng Bộ Sưu Tập
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
}
