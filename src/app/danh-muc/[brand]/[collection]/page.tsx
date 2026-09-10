"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import BrandHero from "@/components/BrandHero";
import BrandStory from "@/components/BrandStory";
import SubCollectionsRow from "@/components/SubCollectionsRow";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import ConsultationBanner from "@/components/ConsultationBanner";
import { COLLECTIONS, PRODUCTS, BRANDS } from "@/lib/data";
import { FilterState } from "@/types";
import { X, SlidersHorizontal } from "lucide-react";

export default function CollectionPage() {
  const params = useParams();
  const slugArray = Array.isArray(params?.slug)
    ? params.slug
    : typeof params?.slug === "string"
    ? [params.slug]
    : [];
  const brandSlug = (params?.brand as string) || slugArray[0] || "rolex";
  const collectionSlug =
    (params?.collection as string) || slugArray[1] || "yacht-master";

  const brand = BRANDS.find((b) => b.slug === brandSlug) || {
    name: "Rolex",
    slug: "rolex",
    count: 32,
  };

  const collectionInfo = COLLECTIONS[collectionSlug] || {
    name: "Yacht-Master",
    slug: "yacht-master",
    brandName: brand.name,
    brandSlug: brand.slug,
    description:
      "Yacht-Master là hiện thân của phong cách sống thượng lưu trên những du thuyền sang trọng. Tuyệt tác này nổi bật với vành bezel xoay hai chiều sở hữu các chữ số đúc nổi 3D tinh xảo – dấu ấn nhận diện độc tôn của bộ sưu tập của Rolex.",
    totalProducts: 20,
  };

  // State for layout & filters
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const [filters, setFilters] = useState<FilterState>({
    collections: [collectionSlug],
    stockStatuses: [],
    priceRange: [0, 20000000000],
    caseSizes: [],
  });

  // Sub-collections data matching the row in sample image
  const subCollections = useMemo(() => {
    return [
      {
        name: "YACHT-MASTER",
        slug: "yacht-master",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126622-0002-Mat-So-Xanh-1.png",
      },
      {
        name: "SUBMARINER",
        slug: "submariner",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png",
      },
      {
        name: "DAYTONA",
        slug: "daytona",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126621-0001-Mat-So-Nau-Chocolate-800x800.png",
      },
      {
        name: "DATEJUST",
        slug: "datejust",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-37-268622-0002-Mat-So-Rhodium-800x800.png",
      },
      {
        name: "GMT-MASTER II",
        slug: "gmt-master-ii",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-40-126655-0002-Mat-So-Den-800x800.png",
      },
      {
        name: "OYSTER PERPETUAL",
        slug: "oyster-perpetual",
        image:
          "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226658-0001-Mat-So-Den-800x800.png",
      },
    ];
  }, []);

  const availableCollections = useMemo(() => {
    return [
      { name: "Yacht Master", slug: "yacht-master", count: 20 },
      { name: "Submariner", slug: "submariner", count: 16 },
      { name: "Cosmograph Daytona", slug: "daytona", count: 14 },
    ];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      // Filter by collection if selected
      if (
        filters.collections.length > 0 &&
        !filters.collections.includes(
          product.collection.toLowerCase().replace(/ /g, "-")
        )
      ) {
        return false;
      }

      // Filter by stock status
      if (
        filters.stockStatuses.length > 0 &&
        !filters.stockStatuses.includes(product.stockStatus)
      ) {
        return false;
      }

      // Filter by price range
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      return true;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A]">
      {/* 1. Large Brand Hero Banner */}
      <BrandHero
        brandName={brand.name}
        subtitle="Timeless Elegance."
        description="Biểu tượng của sự thanh lịch vượt thời gian và tinh thần sáng tạo đỉnh cao."
        heroImage="/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Brand Story & Showroom Section */}
        <BrandStory
          brandName={brand.name}
          brandSlug={brand.slug}
          tagline="Biểu tượng của sự sáng tạo và tinh tế vượt thời gian."
          description="Thành lập với sứ mệnh định hình chuẩn mực đỉnh cao của ngành chế tác vi cơ khí, mỗi cỗ máy thời gian là sự kết tinh hoàn mỹ giữa nghệ thuật kim hoàn, di sản truyền đời và độ chính xác tuyệt đối."
        />

        {/* 3. Sub-Collections Row */}
        <SubCollectionsRow
          items={subCollections}
          activeSlug={collectionSlug}
          brandSlug={brand.slug}
        />

        {/* 4. Product Catalog Area with Sidebar */}
        <section id="catalog" className="py-12">
          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden justify-between items-center mb-6 pb-4 border-b border-[#EAE5DD]">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#8C5824] text-[#8C5824] rounded-sm text-xs font-semibold uppercase tracking-wider bg-white"
            >
              <SlidersHorizontal size={14} />
              <span>Bộ Lọc ({filteredProducts.length})</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#EAE5DD] rounded-sm text-xs py-2 px-3 bg-white text-[#1A1A1A] focus:outline-none"
            >
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                availableCollections={availableCollections}
                brandName={brand.name}
                totalBrandProducts={brand.count}
              />
            </div>

            {/* Product Grid Area */}
            <div className="flex-1 min-w-0">
              {/* Desktop Result Counter & Sort */}
              <div className="hidden lg:flex justify-between items-center mb-6 pb-3 border-b border-[#EAE5DD]">
                <span className="text-xs text-neutral-500 uppercase tracking-wider">
                  Hiển thị{" "}
                  <strong className="text-[#1A1A1A]">
                    {filteredProducts.length}
                  </strong>{" "}
                  sản phẩm
                </span>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-neutral-500">Sắp xếp:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sắp xếp theo giá"
                    className="border border-[#EAE5DD] rounded-sm text-xs py-1.5 px-2.5 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#8C5824]"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="price-asc">Giá: Thấp đến Cao</option>
                    <option value="price-desc">Giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>

              {/* 4-Column Product Grid */}
              <ProductGrid products={filteredProducts} columns={4} />
            </div>
          </div>
        </section>

        {/* 5. Consultation Banner */}
        <ConsultationBanner brandName={brand.name} />
      </div>

      {/* Mobile Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end lg:hidden">
          <div className="w-80 max-w-full bg-[#FBF9F5] h-full p-6 overflow-y-auto border-l border-[#EAE5DD] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DD] mb-6">
                <span className="font-serif text-base text-[#1A1A1A] font-bold uppercase tracking-wider">
                  Bộ Lọc Sản Phẩm
                </span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-neutral-500 hover:text-[#1A1A1A] p-1"
                >
                  <X size={20} />
                </button>
              </div>

              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                availableCollections={availableCollections}
                brandName={brand.name}
                totalBrandProducts={brand.count}
              />
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full mt-8 bg-[#8C5824] hover:bg-[#724419] text-white font-semibold uppercase tracking-wider py-3.5 rounded-sm text-xs transition-colors"
            >
              Xem {filteredProducts.length} sản phẩm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
