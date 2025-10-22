import type {Product} from "@type/product.ts";

export type CartItem = {
  product: Product;
  id: string;
  count: number;
}