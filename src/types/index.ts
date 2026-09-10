export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  collection: string;
  referenceNumber: string;
  price: number;
  originalPrice?: number;
  stockStatus: "in_stock" | "pre_order" | "out_of_stock";
  images: string[];
  specs: {
    caseSize?: string;
    caseMaterial?: string;
    dialColor?: string;
    bezel?: string;
    movement?: string;
    braceletMaterial?: string;
    waterResistance?: string;
    year?: string;
    condition?: string;
  };
  description: string;
}

export interface CollectionInfo {
  name: string;
  slug: string;
  brandName: string;
  brandSlug: string;
  description: string;
  totalProducts: number;
}

export interface FilterState {
  collections: string[];
  stockStatuses: string[];
  priceRange: [number, number];
  caseSizes: string[];
}
