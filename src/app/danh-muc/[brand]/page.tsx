import { redirect } from "next/navigation";

interface BrandPageProps {
  params: {
    brand: string;
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandSlug = params.brand.toLowerCase();

  if (brandSlug === "audemars-piguet") {
    redirect("/danh-muc/audemars-piguet/code-11-59");
  }

  // Default to yacht-master for Rolex and other brands
  redirect(`/danh-muc/${brandSlug}/yacht-master`);
}
