import type {Product} from "@type/product.ts";

export type CartItemId = string
export type CartItem = {
  product: Product;
  id: CartItemId;
  count: number;
}