"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import BrandHero from "@/components/BrandHero";
import BrandStory from "@/components/BrandStory";
import SubCollectionsRow from "@/components/SubCollectionsRow";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
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
  const isHublot = toSlug(brandSlug) === "hublot";
  const isPatek = toSlug(brandSlug) === "patek-philippe";
  const isCartier = toSlug(brandSlug) === "cartier";
  const isFM = toSlug(brandSlug) === "franck-muller";

  const brand = BRANDS.find((b) => toSlug(b.slug) === toSlug(brandSlug)) || (
    isAP
      ? { name: "Audemars Piguet", slug: "audemars-piguet", count: 179 }
      : isRM
        ? { name: "Richard Mille", slug: "richard-mille", count: 81 }
        : isHublot
          ? { name: "Hublot", slug: "hublot", count: 163 }
          : isPatek
            ? { name: "Patek Philippe", slug: "patek-philippe", count: 194 }
            : isCartier
              ? { name: "Cartier", slug: "cartier", count: 200 }
              : isFM
                ? { name: "Franck Muller", slug: "franck-muller", count: 58 }
                : { name: "Rolex", slug: "rolex", count: 32 }
  );

  const defaultCollSlug = isRM
    ? "rm-011"
    : isAP
      ? "code-11-59"
      : isHublot
        ? "big-bang"
        : isPatek
          ? "nautilus"
          : isCartier
            ? "santos"
            : isFM
              ? "vanguard-lady"
              : "yacht-master";
  let effectiveCollSlug = toSlug(collectionSlug || defaultCollSlug);
  if (effectiveCollSlug === "rm-sport") {
    effectiveCollSlug = "rm-sport-lifestyle";
  }
  if (effectiveCollSlug === "bigbang") {
    effectiveCollSlug = "big-bang";
  }
  if (effectiveCollSlug === "santos-de-cartier") {
    effectiveCollSlug = "santos";
  }
  if (effectiveCollSlug === "panthere-de-cartier") {
    effectiveCollSlug = "panthere";
  }
  if (effectiveCollSlug === "ballon-bleu-de-cartier") {
    effectiveCollSlug = "ballon-bleu";
  }
  if (effectiveCollSlug === "ronde-de-cartier") {
    effectiveCollSlug = "ronde";
  }
  if (effectiveCollSlug === "clash-unlimited" || effectiveCollSlug === "clash-un-limited") {
    effectiveCollSlug = "clash";
  }
  if (effectiveCollSlug === "cloche-de-cartier") {
    effectiveCollSlug = "cloche";
  }
  if (effectiveCollSlug === "v32" || effectiveCollSlug === "ladies-collection") {
    effectiveCollSlug = "vanguard-lady";
  }
  if (effectiveCollSlug === "v41" || effectiveCollSlug === "mens-collection") {
    effectiveCollSlug = "vanguard-men";
  }
  if (effectiveCollSlug === "yachting") {
    effectiveCollSlug = "vanguard-yachting";
  }

  const collectionInfo = COLLECTIONS[effectiveCollSlug] || {
    name: isRM
      ? "RM 011"
      : isAP
        ? "Code 11.59"
        : isHublot
          ? "Big Bang"
          : isPatek
            ? "Nautilus"
            : isCartier
              ? "Santos de Cartier"
              : isFM
                ? "Vanguard Lady"
                : "Yacht-Master",
    slug: effectiveCollSlug,
    brandName: brand.name,
    brandSlug: brand.slug,
    description: isRM
      ? "Biểu tượng Chronograph thể thao lừng danh gắn liền với đường đua F1. Vỏ Tonneau mạnh mẽ, bộ máy Flyback Chronograph Calibre RMAC1 và các vật liệu công nghệ cao NTPT Carbon, Ceramic & Red TPT."
      : isAP
        ? "Code 11.59 by Audemars Piguet là sự giao thoa hoàn mỹ giữa nghệ thuật chế tác Haute Horlogerie truyền thống và cấu trúc hình học đa tầng tương lai với vành bát giác ẩn mình dưới nắp sapphire vòm kép độc bản."
        : isHublot
          ? "Biểu tượng đột phá và linh hồn của triết lý 'Art of Fusion' từ Hublot. Big Bang gây ấn tượng với cấu trúc đa tầng sandwich táo bạo, vành bezel 6 ốc vít chữ H trứ danh cùng các chất liệu công nghệ cao như Magic Gold, King Gold và Ceramic."
          : isPatek
            ? "Tuyệt tác kinh điển của huyền thoại Gérald Genta từ năm 1976. Biểu tượng tối thượng của phong cách thể thao thanh lịch với vành bezel bát giác bo tròn lấy cảm hứng từ ô cửa sổ du thuyền và mặt số sọc ngang dập nổi trứ danh."
            : isCartier
              ? "Chiếc đồng hồ đeo tay hiện đại đầu tiên trên thế giới ra mắt năm 1904 dành cho phi công Alberto Santos-Dumont. Vẻ đẹp hình học kinh điển với vành bezel đính ốc vít đặc trưng và các góc bo cong hoàn mỹ."
              : isFM
                ? "Bộ sưu tập biểu tượng tôn vinh vẻ đẹp kiêu sa và lộng lẫy của phái đẹp. Vỏ Tonneau uốn cong mềm mại ôm trọn cổ tay, cọc số Art Deco phóng khoáng cùng kỹ nghệ nạm kim cương tinh xảo bậc nhất."
                : "Yacht-Master là hiện thân của phong cách sống thượng lưu trên những du thuyền sang trọng. Tuyệt tác này nổi bật với vành bezel xoay hai chiều sở hữu các chữ số đúc nổi 3D tinh xảo – dấu ấn nhận diện độc tôn của bộ sưu tập của Rolex.",
    totalProducts: isRM ? 7 : isAP ? 77 : isHublot ? 84 : isPatek ? 69 : isCartier ? 46 : isFM ? 35 : 20,
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
    if (isHublot) {
      return [
        {
          name: "BIG BANG",
          slug: "big-bang",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Hublot-Big-Bang-Meca-10-King-Gold-45mm-414.OI_.1123.RX_-2.png",
        },
        {
          name: "CLASSIC FUSION",
          slug: "classic-fusion",
          image:
            "https://theempire.vn/wp-content/uploads/2025/03/Hublot-Classic-Fusion-Aerofusion-Chronograph-Orlinski-King-Gold-Pave-45mm-525.OX_.0180.RX_.1704.ORL19-1.png",
        },
        {
          name: "SPIRIT OF BIG BANG",
          slug: "spirit-of-big-bang",
          image:
            "https://theempire.vn/wp-content/uploads/2025/01/Hublot-Spirit-Of-Big-Bang-Meca-10-King-Gold-45mm-614.OX_.1180.RX_.png",
        },
      ];
    }
    if (isPatek) {
      return [
        {
          name: "NAUTILUS",
          slug: "nautilus",
          image:
            "https://theempire.vn/wp-content/uploads/2026/01/Dong-ho-Patek-Philippe-Ladies-Nautilus-Rose-Gold-35.2mm-7118-1450R-001-Mat-So-Kim-Cuong-.png",
        },
        {
          name: "AQUANAUT",
          slug: "aquanaut",
          image:
            "https://theempire.vn/wp-content/uploads/2026/01/Patek-Philippe-Aquanaut-42.2mm-5168G-001-Mat-So-Xanh-.png",
        },
        {
          name: "COMPLICATIONS",
          slug: "complications",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Patek-Philippe-Annual-Calendar-Complications-4947G-001-Mat-So-Xanh-38mm.png",
        },
        {
          name: "CALATRAVA",
          slug: "calatrava",
          image:
            "https://theempire.vn/wp-content/uploads/2024/12/Dong-ho-Patek-Philippe-Calatrava-4978-400G-001-36.5mm.png",
        },
        {
          name: "TWENTY~4",
          slug: "twenty-4",
          image:
            "https://theempire.vn/wp-content/uploads/2025/01/Dong-Ho-Patek-Philippe-Twenty-4-4910-1200A-001-30mm.png",
        },
        {
          name: "GRAND COMPLICATIONS",
          slug: "grand-complications",
          image:
            "https://theempire.vn/wp-content/uploads/2026/05/Patek-Philippe-Grand-Complications-5204G-010.png",
        },
        {
          name: "GOLDEN ELLIPSE",
          slug: "golden-ellipse",
          image:
            "https://theempire.vn/wp-content/uploads/2025/01/Dong-ho-Patek-Philippe-Golden-Elipse-5738P-001-Mat-So-Xanh.png",
        },
      ];
    }
    if (isCartier) {
      return [
        {
          name: "SANTOS DE CARTIER",
          slug: "santos",
          image:
            "https://empireluxury.vn/wp-content/uploads/2023/12/dong-ho-cartier-santos-de-cartier-chronograph-43-3mm-crwssa0017-1.png",
        },
        {
          name: "TANK",
          slug: "tank",
          image:
            "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-tank-americaine-rose-gold-silver-dial-15-2mm-wjta0057-4.png",
        },
        {
          name: "PANTHÈRE DE CARTIER",
          slug: "panthere",
          image:
            "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-la-panthere-de-cartier-white-gold-black-dial-15-2mm-hpi01741-3.png",
        },
        {
          name: "BAIGNOIRE",
          slug: "baignoire",
          image:
            "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-baignoire-allongee-white-gold-silver-dial-20-7mm-wjba0007-sao-chep-2.png",
        },
        {
          name: "BALLON BLEU",
          slug: "ballon-bleu",
          image:
            "https://empireluxury.vn/wp-content/uploads/2024/01/dong-ho-cartier-ballon-blanc-de-cartier-30mm-crwjbl0008-5.jpg",
        },
        {
          name: "TORTUE",
          slug: "tortue",
          image:
            "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-tortue-white-gold-silver-dial-32-9mm-crhpi01830-1.png",
        },
        {
          name: "CRASH",
          slug: "crash",
          image:
            "https://empireluxury.vn/wp-content/uploads/2026/07/dong-ho-cartier-crash-rose-gold-si-25-5mm-crwl420047-4.png",
        },
        {
          name: "RONDE DE CARTIER",
          slug: "ronde",
          image:
            "https://empireluxury.vn/wp-content/uploads/2024/01/dong-ho-cartier-montre-ronde-must-de-cartier-29mm-crwsrn0030-8.jpg",
        },
      ];
    }
    if (isFM) {
      return [
        {
          name: "VANGUARD LADY",
          slug: "vanguard-lady",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-ladies-collection-v-32-sc-at-fo-ld-cd-1r-5n-nr-8.jpg",
        },
        {
          name: "VANGUARD MEN",
          slug: "vanguard-men",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-vanguard-v-41-sc-dt-ac-rg-4.jpg",
        },
        {
          name: "CRAZY HOURS",
          slug: "crazy-hours",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-crazy-hours-v-32-ch-d-5n-nr-2-1.jpg",
        },
        {
          name: "VANGUARD YACHTING",
          slug: "vanguard-yachting",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-vanguard-v-41-cc-dt-yachting-ac-bl-7.jpg",
        },
        {
          name: "MASTER SQUARE",
          slug: "master-square",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-master-square-6002-mb-qz-col-drm-rd-1r-5n-9-1.jpg",
        },
        {
          name: "INFINITY",
          slug: "infinity",
          image:
            "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-infinity-8041-qz-rd-5n-6.jpg",
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
  }, [isAP, isRM, isHublot, isPatek, isCartier, isFM]);

  // Dynamic collections for the current brand
  const availableCollections = useMemo(() => {
    const brandProducts = PRODUCTS.filter(
      (p) => toSlug(p.brand) === toSlug(brandSlug)
    );

    const collectionMap = new Map<string, { name: string; slug: string; count: number }>();

    brandProducts.forEach((p) => {
      let slug = toSlug(p.collection);
      if (slug === "bigbang") slug = "big-bang";
      if (slug === "rm-sport") slug = "rm-sport-lifestyle";
      if (slug === "santos-de-cartier") slug = "santos";
      if (slug === "panthere-de-cartier") slug = "panthere";
      if (slug === "ballon-bleu-de-cartier") slug = "ballon-bleu";
      if (slug === "ronde-de-cartier") slug = "ronde";
      if (slug === "clash-unlimited" || slug === "clash-un-limited") slug = "clash";
      if (slug === "cloche-de-cartier") slug = "cloche";
      if (slug === "v32" || slug === "ladies-collection") slug = "vanguard-lady";
      if (slug === "v41" || slug === "mens-collection") slug = "vanguard-men";
      if (slug === "yachting") slug = "vanguard-yachting";

      if (!collectionMap.has(slug)) {
        collectionMap.set(slug, {
          name: p.collection,
          slug: slug,
          count: 0,
        });
      }
      collectionMap.get(slug)!.count++;
    });

    // Also include any predefined collections from data.ts for this brand
    Object.values(COLLECTIONS).forEach((col) => {
      if (toSlug(col.brandSlug) === toSlug(brandSlug)) {
        const slug = toSlug(col.slug);
        if (!collectionMap.has(slug)) {
          collectionMap.set(slug, {
            name: col.name,
            slug: slug,
            count: col.totalProducts || 0,
          });
        }
      }
    });

    return Array.from(collectionMap.values());
  }, [brandSlug]);

  // Dynamic case sizes for the current brand
  const availableSizes = useMemo(() => {
    const brandProducts = PRODUCTS.filter(
      (p) => toSlug(p.brand) === toSlug(brandSlug)
    );
    const sizeMap = new Map<string, number>();
    brandProducts.forEach((p) => {
      const s = p.specs?.caseSize?.trim();
      if (s) {
        const m = s.match(/^(\d{2})\s*mm$/i);
        const norm = m ? `${m[1]} mm` : s;
        sizeMap.set(norm, (sizeMap.get(norm) || 0) + 1);
      }
    });

    if (sizeMap.size > 0) {
      return Array.from(sizeMap.entries())
        .filter(([_, count]) => count >= 2)
        .sort((a, b) => {
          const numA = parseInt(a[0], 10) || 0;
          const numB = parseInt(b[0], 10) || 0;
          return numA - numB;
        })
        .slice(0, 8)
        .map(([size]) => size);
    }

    return ["37 mm", "40 mm", "42 mm", "44 mm"];
  }, [brandSlug]);

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
          if (
            (s === "big-bang" || s === "bigbang") &&
            (prodCollSlug === "big-bang" || prodCollSlug === "bigbang")
          ) {
            return true;
          }
          if (
            (s === "santos" || s === "santos-de-cartier") &&
            (prodCollSlug === "santos" || prodCollSlug === "santos-de-cartier")
          ) {
            return true;
          }
          if (
            (s === "panthere" || s === "panthere-de-cartier") &&
            (prodCollSlug === "panthere" || prodCollSlug === "panthere-de-cartier")
          ) {
            return true;
          }
          if (
            (s === "ballon-bleu" || s === "ballon-bleu-de-cartier") &&
            (prodCollSlug === "ballon-bleu" || prodCollSlug === "ballon-bleu-de-cartier")
          ) {
            return true;
          }
          if (
            (s === "ronde" || s === "ronde-de-cartier") &&
            (prodCollSlug === "ronde" || prodCollSlug === "ronde-de-cartier")
          ) {
            return true;
          }
          if (
            (s === "clash" || s === "clash-unlimited" || s === "clash-un-limited") &&
            (prodCollSlug === "clash" || prodCollSlug === "clash-unlimited" || prodCollSlug === "clash-un-limited")
          ) {
            return true;
          }
          if (
            (s === "cloche" || s === "cloche-de-cartier") &&
            (prodCollSlug === "cloche" || prodCollSlug === "cloche-de-cartier")
          ) {
            return true;
          }
          if (
            s === "vanguard" &&
            (prodCollSlug === "vanguard" ||
              prodCollSlug === "vanguard-lady" ||
              prodCollSlug === "vanguard-men" ||
              prodCollSlug === "vanguard-yachting")
          ) {
            return true;
          }
          if (
            (s === "vanguard-lady" || s === "v32" || s === "ladies-collection") &&
            (prodCollSlug === "vanguard-lady" || prodCollSlug === "v32" || prodCollSlug === "ladies-collection")
          ) {
            return true;
          }
          if (
            (s === "vanguard-men" || s === "v41" || s === "mens-collection") &&
            (prodCollSlug === "vanguard-men" || prodCollSlug === "v41" || prodCollSlug === "mens-collection")
          ) {
            return true;
          }
          if (
            (s === "vanguard-yachting" || s === "yachting") &&
            (prodCollSlug === "vanguard-yachting" || prodCollSlug === "yachting")
          ) {
            return true;
          }
          if (s === "crazy-hours" && prodCollSlug === "crazy-hours") {
            return true;
          }
          if (s === "master-square" && prodCollSlug === "master-square") {
            return true;
          }
          if (s === "infinity" && prodCollSlug === "infinity") {
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

  // Pagination logic
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 on filter, sort or collection changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy, effectiveCollSlug]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    const catalogEl = document.getElementById("catalog");
    if (catalogEl) {
      const headerOffset = 90;
      const elementPosition = catalogEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1A1A1A]">
      {/* 1. Large Brand Hero Banner */}
      <BrandHero
        brandName={brand.name}
        brandSlug={brand.slug}
        title={brand.name.toUpperCase()}
        subtitle={
          isRM
            ? "A Racing Machine On The Wrist"
            : isAP
              ? "Haute Horlogerie Since 1875"
              : isHublot
                ? "The Art of Fusion"
                : isPatek
                  ? "Generations of Excellence Since 1839"
                  : isCartier
                    ? "The Jeweller of Kings and the King of Jewellers"
                    : isFM
                      ? "Master of Complications"
                      : "Timeless Elegance."
        }
        description={
          isAP
            ? "Đồng hồ Audemars Piguet gây ấn tượng không chỉ bởi thiết kế táo bạo và đột phá, mà còn bởi chất liệu và kỹ thuật vượt trội trong từng chi tiết. Từ mô-đun đến chuyển động cơ học, mọi yếu tố đều được các kỹ sư cơ khí vi mô hàng đầu chế tác tỉ mỉ qua hàng nghìn giờ lao động thủ công."
            : isRM
              ? "Đỉnh cao đột phá vi cơ khí từ Les Breuleux, Thụy Sĩ. Tiên phong ứng dụng vật liệu hàng không vũ trụ và xe đua F1 vào những cỗ máy thời gian triệu đô."
              : isHublot
                ? "Khẳng định vị thế tiên phong với triết lý 'The Art of Fusion' – sự hòa quyện đỉnh cao giữa truyền thống chế tác Haute Horlogerie Thụy Sĩ và các vật liệu tương lai độc quyền như Magic Gold, King Gold và Ceramic màu sắc."
                : isPatek
                  ? "Đỉnh cao chế tác Haute Horlogerie Thụy Sĩ từ năm 1839. 'Bạn chưa bao giờ thực sự sở hữu một chiếc Patek Philippe, bạn chỉ đơn thuần gìn giữ nó cho thế hệ mai sau.'"
                  : isCartier
                    ? "Khởi nguồn từ Paris năm 1847, Cartier được Vua Edward VII của Anh tôn vinh là 'Nhà kim hoàn của các vị vua và Vua của các nhà kim hoàn'. Mỗi tạo tác đồng hồ Cartier là sự thăng hoa trọn vẹn giữa tư duy hình học tiên phong, di sản nghệ thuật kim hoàn đỉnh cao và sự thanh lịch kiểu Pháp bất hủ."
                    : isFM
                      ? "Được mệnh danh là 'Bậc thầy của những cỗ máy cơ học siêu phức tạp', Franck Muller chinh phục giới mộ điệu toàn cầu bằng thiết kế dáng cong Tonneau Curvex huyền thoại, cọc số sắc màu biến ảo và tinh hoa chế tác độc bản tại Watchland, Geneva."
                      : "Biểu tượng của sự chính xác đỉnh cao, đẳng cấp thượng lưu và giá trị trường tồn qua các thế hệ kiệt tác thời gian Thụy Sĩ."
        }
        heroImage={
          isRM
            ? "https://theempire.vn/wp-content/uploads/2024/12/Dong-Ho-Richard-Mille-RM-011-Felipe-Massa-Red-TPT-RM011.png"
            : isAP
              ? "https://theempire.vn/wp-content/uploads/2024/11/Audemars-Piquet-Royal-Oak-Flying-Tourbillon-41mm-1.png"
              : isHublot
                ? "https://theempire.vn/wp-content/uploads/2024/12/Hublot-Big-Bang-Meca-10-King-Gold-45mm-414.OI_.1123.RX_-2.png"
                : isPatek
                  ? "https://theempire.vn/wp-content/uploads/2026/01/Dong-ho-Patek-Philippe-Ladies-Nautilus-Rose-Gold-35.2mm-7118-1450R-001-Mat-So-Kim-Cuong-.png"
                  : isCartier
                    ? "https://empireluxury.vn/wp-content/uploads/2023/12/dong-ho-cartier-santos-de-cartier-chronograph-43-3mm-crwssa0017-1.png"
                    : isFM
                      ? "https://empireluxury.vn/wp-content/uploads/2022/04/dong-ho-franck-muller-crazy-hours-v-32-ch-d-5n-nr-2-1.jpg"
                      : "/images/watches/Dong-Ho-Rolex-Yacht-Master-42-226659-0002-Mat-So-Den-800x800.png"
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Brand Story & Showroom Section */}
        <BrandStory
          brandName={brand.name}
          brandSlug={brand.slug}
          tagline={
            isRM
              ? "Kỷ nguyên của những cỗ máy thời gian siêu nhẹ và siêu bền bỉ."
              : isHublot
                ? "Triết lý 'The Art of Fusion' định hình tương lai đồng hồ xa xỉ."
                : isPatek
                  ? "Di sản truyền đời và chuẩn mực tối thượng của Haute Horlogerie."
                  : isCartier
                    ? "Đỉnh cao kim hoàn Paris và những kiệt tác hình học bất hủ."
                    : isFM
                      ? "Bậc thầy của những cỗ máy cơ học siêu phức tạp và nghệ thuật kim hoàn Geneva."
                      : "Biểu tượng của sự sáng tạo và tinh tế vượt thời gian."
          }
          description={
            isRM
              ? "Richard Mille định hình lại hoàn toàn khái niệm về đồng hồ xa xỉ với triết lý kết hợp giữa công nghệ đua xe Công thức 1 và kỹ nghệ đồng hồ Haute Horlogerie đỉnh cao. Mỗi siêu phẩm chế tác từ Carbon TPT, Titanium cấp độ 5 và Sapphire nguyên khối."
              : isHublot
                ? "Hublot là biểu tượng tiên phong của thế giới đồng hồ thế kỷ 21 với triết lý The Art of Fusion – kết hợp táo bạo giữa truyền thống chế tác Haute Horlogerie Thụy Sĩ cùng những vật liệu đột phá như Magic Gold, King Gold và Sapphire nguyên khối."
                : isPatek
                  ? "Patek Philippe là xưởng chế tác đồng hồ độc lập lâu đời cuối cùng tại Geneva, được mệnh danh là 'Vua của thế giới đồng hồ'. Mỗi cỗ máy thời gian là một kiệt tác vô giá kết tinh từ kỹ nghệ thủ công bậc thầy, con dấu Patek Philippe Seal khắt khe và giá trị gia truyền qua nhiều thế hệ."
                  : isCartier
                    ? "Cartier là biểu tượng vĩ đại của nghệ thuật kim hoàn và chế tác đồng hồ xa xỉ nước Pháp từ năm 1847. Tiên phong sáng tạo nên chiếc đồng hồ đeo tay hiện đại đầu tiên trên thế giới (Santos) cùng những hình dáng vỏ kinh điển như Tank, Panthère hay Crash, Cartier đã và đang định hình phong cách sống vương giả của giới quý tộc và giới mộ điệu toàn cầu."
                    : isFM
                      ? "Thành lập tại Genthod, Geneva bởi nghệ nhân thiên tài Franck Muller và chuyên gia kim hoàn Vartan Sirmakes, Franck Muller đã làm nên cuộc cách mạng trong ngành chế tác đồng hồ thế giới. Sở hữu những phát minh chấn động như Crazy Hours, Aeternitas Mega và thiết kế vỏ Cintrée Curvex độc nhất vô nhị, mỗi tác phẩm là sự giao hòa tuyệt mỹ giữa nghệ thuật thị giác đương đại và kỹ nghệ Haute Horlogerie Thụy Sĩ."
                      : "Rolex là chuẩn mực tối thượng của sự hoàn mỹ và độ bền bỉ trong chế tác đồng hồ Thụy Sĩ. Mỗi cỗ máy Oyster Perpetual hay Professional đều được tạo tác với độ chính xác cơ học tuyệt đỉnh cùng vật liệu Oystersteel, Rolesor và vàng 18 ct độc quyền."
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
                availableSizes={availableSizes}
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
                    {filteredProducts.length === 0
                      ? 0
                      : `${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          filteredProducts.length
                        )}`}
                  </strong>{" "}
                  trên tổng số{" "}
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

              {/* 4-Column Product Grid with Pagination */}
              <ProductGrid products={paginatedProducts} columns={4} />

              {/* Pagination Controls */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
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
                availableSizes={availableSizes}
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
