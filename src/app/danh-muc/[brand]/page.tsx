import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

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

  if (brandSlug === "richard-mille") {
    redirect("/danh-muc/richard-mille/rm-011");
  }

  if (brandSlug === "hublot") {
    redirect("/danh-muc/hublot/big-bang");
  }

  if (brandSlug === "patek-philippe") {
    redirect("/danh-muc/patek-philippe/aquanaut");
  }

  if (brandSlug === "cartier") {
    redirect("/danh-muc/cartier/santos");
  }

  if (brandSlug === "franck-muller") {
    redirect("/danh-muc/franck-muller/vanguard-lady");
  }

  // Default to lady-datejust for Rolex and other brands
  redirect(`/danh-muc/${brandSlug}/lady-datejust`);
}
