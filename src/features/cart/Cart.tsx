import {type FC, useMemo} from "react";
import {Layout} from "@ui/Layout.tsx";
import {ProductCard} from "@ui/ProductCard.tsx";
import {useCartContext} from "./сartContext.ts";

export const Cart: FC = () => {
  const {cart} = useCartContext()
  const totalPrice = useMemo(()=>
    cart.reduce((acc, cartItem) => {
    return acc + cartItem.product.price * cartItem.count
  }, 0), [cart])

  return (
    <Layout
      header={'Cart'}
      footer={totalPrice > 0 ? <span>Total price: {totalPrice}</span> : null}
    >
      {cart.map(({product, count, id}) => (
        <ProductCard
          key={id}
          product={product}
          productCount={count}
          cartItemId={id}
        />
      ))}
    </Layout>
  )
}