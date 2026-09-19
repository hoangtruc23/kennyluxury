import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bordered-grid-item group flex flex-col justify-between p-6 bg-[#F6F2EA] relative hover:bg-[#EFEBE4] transition-colors">
      {/* Stock badge if pre-order */}
      {product.stockStatus === "pre_order" && (
        <span className="absolute top-4 left-4 z-10 text-[10px] uppercase font-semibold tracking-widest bg-[#8C5824]/10 text-[#8C5824] border border-[#8C5824]/30 px-2 py-0.5 rounded">
          Đặt hàng
        </span>
      )}

      {/* Image container */}
      <Link
        href={`/san-pham/${product.slug}`}
        className="block relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center"
      >
        <div className="relative w-[85%] h-[85%] transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="text-center space-y-2 mt-auto">
        <h3 className="text-sm md:text-[15px] font-medium text-[#1A1A1A] group-hover:text-[#8C5824] line-clamp-2 leading-relaxed min-h-[44px] transition-colors">
          <Link href={`/san-pham/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <div className="pt-2">
          <span className="text-[#8C5824] font-semibold text-sm md:text-base tracking-wide">
            Giá: Liên hệ
          </span>
        </div>
      </div>
    </div>
  );
}
