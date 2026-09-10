import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CollectionBannerProps {
  title: string;
  parentName?: string;
  parentUrl?: string;
}

export default function CollectionBanner({
  title,
  parentName = "Rolex",
  parentUrl = "/danh-muc/rolex/yacht-master",
}: CollectionBannerProps) {
  return (
    <div className="w-full bg-black py-12 md:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href={parentUrl}
          className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors group"
        >
          <span className="text-2xl md:text-4xl font-light transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white tracking-wide font-normal">
            {title}
          </h1>
        </Link>
      </div>
    </div>
  );
}
