import { PRODUCTS, COLLECTIONS } from "./data";
import { Product } from "@/types";

const WORDPRESS_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "http://localhost:8888/ken";

/**
 * Fetch products from WordPress / WooCommerce REST API with fallback to static catalog
 */
export async function getProducts(collectionSlug?: string): Promise<Product[]> {
  try {
    if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_WORDPRESS_URL) {
      const res = await fetch(
        `${WORDPRESS_URL}/wp-json/wc/v3/products?category=${collectionSlug || ""}`,
        { next: { revalidate: 60 } }
      );
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map((item: any) => ({
            id: String(item.id),
            name: item.name,
            slug: item.slug,
            brand: "Rolex",
            collection: "Yacht-Master",
            referenceNumber: item.sku || "",
            price: Number(item.price) || 0,
            stockStatus: item.stock_status === "instock" ? "in_stock" : "pre_order",
            images: item.images?.map((img: any) => img.src) || [],
            specs: {},
            description: item.description || "",
          }));
        }
      }
    }
  } catch (error) {
    console.warn("Could not reach WordPress API, falling back to static luxury data.", error);
  }

  // Fallback to high quality static data
  if (collectionSlug) {
    return PRODUCTS.filter(
      (p) => p.collection.toLowerCase().replace(/ /g, "-") === collectionSlug
    );
  }
  return PRODUCTS;
}
