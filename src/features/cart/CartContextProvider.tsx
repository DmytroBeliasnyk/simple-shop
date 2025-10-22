import {type FC, type ReactNode, useCallback, useMemo, useState} from "react";
import type {Product} from "@type/product.ts";
import type {CartItem} from "@type/cartItem.ts"
import {CartStateContext, CartActionsContext} from "./сartContext.ts";
import {nanoid} from "nanoid";

export const CartContextProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = useCallback(
    (product: Product, count: number) => {
      setCart(prev =>
        [...prev, {product, count, id: nanoid()}]
      )
    }, [])

  const incrementProductCount = useCallback(
    (cartItemId: string) => {
      setCart(prev => (
        prev.map(cartItem =>
          cartItem.id === cartItemId
            ? {...cartItem, count: cartItem.count + 1}
            : cartItem
        )))
    }, [])

  const removeFromCart = useCallback(
    (cartItemId: string) => {
      setCart(prev => prev.filter(
        cartItem => cartItem.id !== cartItemId
      ))
    }, [])

  const decrementProductCount = useCallback(
    (cartItemId: string) => {
      setCart(prev => (
        prev.map(cartItem =>
          cartItem.id === cartItemId
            ? {...cartItem, count: Math.max(1, cartItem.count - 1)}
            : cartItem
        )))
    }, [])

  const stateValue = useMemo(() => ({cart}), [cart])
  const actionsValue = useMemo(() => ({
    addToCart, decrementProductCount, removeFromCart, incrementProductCount
  }), [addToCart, decrementProductCount, removeFromCart, incrementProductCount])

  return (
    <CartStateContext value={stateValue}>
      <CartActionsContext value={actionsValue}>
        {children}
      </CartActionsContext>
    </CartStateContext>
  )
}