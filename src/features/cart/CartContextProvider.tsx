import {type FC, type ReactNode, useState} from "react";
import type {Product} from "@type/product.ts";
import type {CartItem} from "@type/cartItem.ts"
import {CartContext} from "./сartContext.ts";
import {nanoid} from "nanoid";

export const CartContextProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(product: Product, count: number) {
    setCart(prev => [...prev, {product, count, id: nanoid()}])
  }

  function incrementProductCount(cartItemId: string) {
    setCart(prev => (
      prev.map(cartItem =>
        cartItem.id === cartItemId
          ? {...cartItem, count: cartItem.count + 1}
          : cartItem
      )))
  }

  function removeFromCart(cartItemId: string) {
    setCart(prev => prev.filter(
      cartItem => cartItem.id !== cartItemId
    ))
  }

  function decrementProductCount(cartItemId: string) {
    setCart(prev => (
      prev.map(cartItem =>
        cartItem.id === cartItemId
          ? {...cartItem, count: Math.max(1, cartItem.count - 1)}
          : cartItem
      )))
  }

  return (
    <CartContext value={{
      cart,
      addToCart,
      incrementProductCount,
      removeFromCart,
      decrementProductCount
    }}>
      {children}
    </CartContext>
  )
}