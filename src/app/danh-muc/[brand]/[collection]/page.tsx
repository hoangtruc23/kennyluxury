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
import { toSlug } from "@/lib/utils";
import { X, SlidersHorizontal, Video } from "lucide-react";

export default function CollectionPage() {
  const params = useParams();
  const slugArray = Array.isArray(params?.slug)
    ? params.slug
    : typeof params?.slug === "string"
      ? [params.slug]
      : [];

  const rawBrand = (params?.brand as string) || "";
  const rawCollection = (params?.collection as string) || "";

  let brandSlug = rawBrand;
  let collectionSlug = rawCollection;

  if (!brandSlug && slugArray.length > 0) {
    const first = toSlug(slugArray[0]);
    if (COLLECTIONS[first]) {
      brandSlug = COLLECTIONS[first].brandSlug;
      collectionSlug = COLLECTIONS[first].slug;
    } else {
      brandSlug = first;
      collectionSlug = slugArray[1] ? toSlug(slugArray[1]) : "";
    }
  } else if (brandSlug && !collectionSlug && slugArray.length > 0) {
    collectionSlug = toSlug(slugArray[0]);
  }

  if (!brandSlug) brandSlug = "rolex";
  const isAP = toSlug(brandSlug) === "audemars-piguet";
  const isRM = toSlug(brandSlug) === "richard-mille";

  const brand = BRANDS.find((b) => toSlug(b.slug) === toSlug(brandSlug)) || (
    isAP
      ? { name: "Audemars Piguet", slug: "audemars-piguet", count: 179 }
      : isRM
        ? { name: "Richard Mille", slug: "richard-mille", count: 81 }
        : { name: "Rolex", slug: "rolex", count: 32 }
  );

  const defaultCollSlug = isRM ? "rm-011" : isAP ? "code-11-59" : "yacht-master";
  let effectiveCollSlug = toSlug(collectionSlug || defaultCollSlug);
  if (effectiveCollSlug === "rm-sport") {
    effectiveCollSlug = "rm-sport-lifestyle";
  }

  const collectionInfo = COLLECTIONS[effectiveCollSlug] || {
    name: isRM ? "RM 011" : isAP ? "Code 11.59" : "Yacht-Master",
    slug: effectiveCollSlug,
    brandName: brand.name,
    brandSlug: brand.slug,
    description: isRM
      ? "Biểu tượng Chronograph thể thao lừng danh gắn liền với đường đua F1. Vỏ Tonneau mạnh mẽ, bộ máy Flyback Chronograph Calibre RMAC1 và các vật liệu công nghệ cao NTPT Carbon, Ceramic & Red TPT."
      : isAP
        ? "Code 11.59 by Audemars Piguet là sự giao thoa hoàn mỹ giữa nghệ thuật chế tác Haute Horlogerie truyền thống và cấu trúc hình học đa tầng tương lai với vành bát giác ẩn mình dưới nắp sapphire vòm kép độc bản."
        : "Yacht-Master là hiện thân của phong cách sống thượng lưu trên những du thuyền sang trọng. Tuyệt tác này nổi bật với vành bezel xoay hai chiều sở hữu các chữ số đúc nổi 3D tinh xảo – dấu ấn nhận diện độc tôn của bộ sưu tập của Rolex.",
    totalProducts: isRM ? 7 : isAP ? 77 : 20,
  };

  // State for layout & filters
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const [filters, setFilters] = useState<FilterState>({
    collections: [effectiveCollSlug],
    stockStatuses: [],
    priceRange: [0, 500000000000],
    caseSizes: [],
  });

  // Keep collection filter in sync when navigating between sub-collections
  React.useEffect(() => {
    if (effectiveCollSlug) {
      setFilters((prev) => ({
        ...prev,
        collections: [effectiveCollSlug],
      }));
    }
  }, [effectiveCollSlug]);

  // Sub-collections data matching the brand
  const subCollections = useMemo(() => {
    if (isRM) {
      return [
        {
          name: "RM 011",
          slug: "rm-011",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-011-Felipe-Massa-Red-TPT-RM011.png",
        },
        {
          name: "RM 07-01",
          slug: "rm-07-01",
          image:
            "https://theempire.vn/wp-content/uploads/2026/07/Richard-Mille-RM-07-01-Automatic-Winding-Coloured-Ceramics-Blush-Pink-scaled.png",
        },
        {
          name: "RM 030",
          slug: "rm-030",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-030-Rose-Gold-RM030.png",
        },
        {
          name: "RM TOURBILLON",
          slug: "rm-tourbillon",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-027-Rafael-Nadal-Tourbillon.png",
        },
        {
          name: "RM SPORT & LIFESTYLE",
          slug: "rm-sport-lifestyle",
          image:
            "https://theempire.vn/wp-content/uploads/2024/11/RM65-01.png",
        },
      ];
    }
    if (isAP) {
      return [
        {
          name: "CODE 11.59",
          slug: "code-11-59",
          image:
            "https://theempire.vn/wp-content/uploads/2026/01/Audemars-Piguet-Code-11.59-By-Audermars-Piguet-Selfwinding-15210OR.OO_.A099CR.01.png",
        },
        {
          name: "ROYAL OAK",
          slug: "royal-oak",
          image:
            "https://theempire.vn/wp-content/uploads/2024/11/Audemars-Piquet-Royal-Oak-Flying-Tourbillon-41mm-1.png",
        },
        {
          name: "ROYAL OAK CONCEPT",
          slug: "royal-oak-concept",
          image:
            "https://theempire.vn/wp-content/uploads/2026/01/Audemars-Piguet-Royal-Oak-Concept-26227BC.SS_.D326CR.01-Flying-Tourbillon-.png",
        },
        {
          name: "ROYAL OAK OFFSHORE",
          slug: "royal-oak-offshore",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/100.png",
        },
      ];
    }
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
  }, [isAP, isRM]);

  const availableCollections = useMemo(() => {
    if (isRM) {
      return [
        { name: "RM 011", slug: "rm-011", count: 7 },
        { name: "RM 07-01", slug: "rm-07-01", count: 26 },
        { name: "RM 030", slug: "rm-030", count: 7 },
        { name: "RM Tourbillon", slug: "rm-tourbillon", count: 26 },
        { name: "RM Sport & Lifestyle", slug: "rm-sport-lifestyle", count: 15 },
      ];
    }
    if (isAP) {
      return [
        { name: "Code 11.59", slug: "code-11-59", count: 77 },
        { name: "Royal Oak", slug: "royal-oak", count: 61 },
        { name: "Royal Oak Concept", slug: "royal-oak-concept", count: 22 },
        { name: "Royal Oak Offshore", slug: "royal-oak-offshore", count: 19 },
      ];
    }
    return [
      { name: "Yacht Master", slug: "yacht-master", count: 20 },
      { name: "Submariner", slug: "submariner", count: 16 },
      { name: "Cosmograph Daytona", slug: "daytona", count: 14 },
    ];
  }, [isAP, isRM]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      // Filter by brand
      if (
        brandSlug &&
        toSlug(product.brand) !== toSlug(brandSlug)
      ) {
        return false;
      }

      // Filter by collection if selected
      if (filters.collections.length > 0) {
        const prodCollSlug = toSlug(product.collection);
        const match = filters.collections.some((c) => {
          const s = toSlug(c);
          if (s === prodCollSlug) return true;
          if (
            (s === "rm-sport" || s === "rm-sport-lifestyle") &&
            (prodCollSlug === "rm-sport" || prodCollSlug === "rm-sport-lifestyle")
          ) {
            return true;
          }
          return false;
        });
        if (!match) return false;
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
        product.price > 0 &&
        (product.price < filters.priceRange[0] ||
          product.price > filters.priceRange[1])
      ) {
        return false;
      }

      return true;
    });

    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [brandSlug, filters, sortBy]);

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1A1A1A]">
      {/* 1. Large Brand Hero Banner */}
      <BrandHero
        brandName={brand.name}
        title={isAP ? "AUDEMARS PIGUET" : `${brand.name.toUpperCase()}`}
        subtitle={
          isRM
            ? "A Racing Machine On The Wrist"
            : isAP
              ? "Haute Horlogerie Since 1875"
              : "Timeless Elegance."
        }
        description={
          isAP
            ? "Đồng hồ Audemars Piguet gây ấn tượng không chỉ bởi thiết kế táo bạo và đột phá, mà còn bởi chất liệu và kỹ thuật vượt trội trong từng chi tiết. Từ mô-đun đến chuyển động cơ học, mọi yếu tố đều được các kỹ sư cơ khí vi mô hàng đầu chế tác tỉ mỉ qua hàng nghìn giờ lao động thủ công."
            : isRM
              ? "Đỉnh cao đột phá vi cơ khí từ Les Breuleux, Thụy Sĩ. Tiên phong ứng dụng vật liệu hàng không vũ trụ và xe đua F1 vào những cỗ máy thời gian triệu đô."
              : "Biểu tượng của sự thanh lịch vượt thời gian và tinh thần sáng tạo đỉnh cao."
        }
        heroImage={
          isRM
            ? "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-011-Felipe-Massa-Red-TPT-RM011.png"
            : isAP
              ? "https://theempire.vn/wp-content/uploads/2024/11/Audemars-Piquet-Royal-Oak-Flying-Tourbillon-41mm-1.png"
              : "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png"
        }
        videoUrl={isAP ? "/videos/Piguet.mp4" : undefined}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Brand Story & Showroom Section */}
        <BrandStory
          brandName={brand.name}
          brandSlug={brand.slug}
          tagline={
            isRM
              ? "Kỷ nguyên của những cỗ máy thời gian siêu nhẹ và siêu bền bỉ."
              : "Biểu tượng của sự sáng tạo và tinh tế vượt thời gian."
          }
          description={
            isRM
              ? "Richard Mille định hình lại hoàn toàn khái niệm về đồng hồ xa xỉ với triết lý kết hợp giữa công nghệ đua xe Công thức 1 và kỹ nghệ đồng hồ Haute Horlogerie đỉnh cao. Mỗi siêu phẩm chế tác từ Carbon TPT, Titanium cấp độ 5 và Sapphire nguyên khối."
              : "Thành lập với sứ mệnh định hình chuẩn mực đỉnh cao của ngành chế tác vi cơ khí, mỗi cỗ máy thời gian là sự kết tinh hoàn mỹ giữa nghệ thuật kim hoàn, di sản truyền đời và độ chính xác tuyệt đối."
          }
        />

        {/* 3. Sub-Collections Row */}
        <SubCollectionsRow
          items={subCollections}
          activeSlug={effectiveCollSlug}
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
              aria-label="Sắp xếp sản phẩm"
              className="border border-[#EAE5DD] rounded-sm text-xs py-2 px-3 bg-white text-[#1A1A1A] focus:outline-none"
            >
              <option value="newest">Mới nhất</option>
              <option value="name-asc">Tên: A - Z</option>
              <option value="name-desc">Tên: Z - A</option>
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
                    aria-label="Sắp xếp sản phẩm"
                    className="border border-[#EAE5DD] rounded-sm text-xs py-1.5 px-2.5 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#8C5824]"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="name-asc">Tên: A - Z</option>
                    <option value="name-desc">Tên: Z - A</option>
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
          <div className="w-80 max-w-full bg-[#F6F2EA] h-full p-6 overflow-y-auto border-l border-[#EAE5DD] flex flex-col justify-between">
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
