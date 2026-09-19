import React from "react";
import HomeHero from "@/components/HomeHero";
import FeaturedCollections from "@/components/FeaturedCollections";
import ShopByBrand from "@/components/ShopByBrand";
import AboutKennyLuxury from "@/components/AboutKennyLuxury";
import ShowroomExperience from "@/components/ShowroomExperience";
import WhyChooseUs from "@/components/WhyChooseUs";
import JournalSection from "@/components/JournalSection";
import InstagramFeed from "@/components/InstagramFeed";
import ExperienceBanner from "@/components/ExperienceBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1A1A1A]">
      {/* 01. Hero Banner */}
      <HomeHero />

      {/* 02. Featured Collection (Red checkmark) */}
      <FeaturedCollections />

      {/* 03. Shop by Brand */}
      <ShopByBrand />

      {/* 04. About Kenny Luxury (Red checkmark) */}
      <AboutKennyLuxury />

      {/* 05. Showroom Experience (Red checkmark) */}
      <ShowroomExperience />

      {/* 06. Vì Sao Chọn Kenny Luxury (Red checkmark) */}
      <WhyChooseUs />

      {/* 07. Journal (Red checkmark) */}
      <JournalSection />

      {/* 08. Instagram Feed */}
      <InstagramFeed />

      {/* 09. Experience Kenny Luxury (Red checkmark) */}
      <ExperienceBanner />
    </div>
  );
}
