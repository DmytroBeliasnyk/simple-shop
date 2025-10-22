import {createContext, useContext} from "react";
import type {CartItem} from "@type/cartItem.ts";
import type {Product} from "@type/product.ts";

type CartStateType = {
  cart: CartItem[];
}
type CartActionsType = {
  addToCart: (product: Product, count: number) => void
  incrementProductCount: (cartItemId: string) => void
  removeFromCart: (cartItemId: string) => void
  decrementProductCount: (cartItemId: string) => void
}
export const CartStateContext = createContext<CartStateType>({
  cart: []
})
export const CartActionsContext = createContext<CartActionsType>({
  addToCart: () => {
  },
  incrementProductCount: () => {
  },
  removeFromCart: () => {
  },
  decrementProductCount: () => {
  }
})

export const useCartStateContext = () => {
  return useContext(CartStateContext)
}
export const useCartActionsContext = () => {
  return useContext(CartActionsContext)
}