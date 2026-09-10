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
    <div className="bordered-grid-item group flex flex-col justify-between p-6 bg-black relative">
      {/* Stock badge if pre-order */}
      {product.stockStatus === "pre_order" && (
        <span className="absolute top-4 left-4 z-10 text-[10px] uppercase font-semibold tracking-widest bg-gold/20 text-gold border border-gold/40 px-2 py-0.5 rounded">
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
        <h3 className="text-sm md:text-[15px] font-medium text-white line-clamp-2 leading-relaxed min-h-[44px]">
          <Link
            href={`/san-pham/${product.slug}`}
            className="hover:text-gold transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <div className="pt-2">
          <span className="text-gold font-semibold text-sm md:text-base tracking-wide">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
