import {createContext, useContext} from "react";
import type {CartItem} from "@type/cartItem.ts";
import type {Product} from "@type/product.ts";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, count: number) => void
  incrementProductCount: (cartItemId: string) => void
  removeFromCart: (cartItemId: string) => void
  decrementProductCount: (cartItemId: string) => void
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {
  },
  incrementProductCount: () => {
  },
  removeFromCart: () => {
  },
  decrementProductCount: () => {
  }
})

export const useCartContext = () => {
  return useContext(CartContext)
}