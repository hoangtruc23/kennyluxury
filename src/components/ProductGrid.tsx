import React from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export default function ProductGrid({
  products,
  columns = 4,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-neutral-400 border border-white/10 p-12">
        <p className="text-lg font-serif">Không tìm thấy sản phẩm phù hợp với bộ lọc.</p>
        <p className="text-xs mt-2 text-neutral-500">
          Vui lòng thử điều chỉnh lại tùy chọn bộ lọc hoặc xóa lọc để xem thêm.
        </p>
      </div>
    );
  }

  const gridColsClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`bordered-grid ${gridColsClass} w-full`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
