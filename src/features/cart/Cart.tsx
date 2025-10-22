import {type FC} from "react";
import {Layout} from "@ui/Layout.tsx";
import {ProductCard} from "@ui/ProductCard.tsx";
import {useCartStateContext} from "./сartContext.ts";

export const Cart: FC = () => {
  const {cart} = useCartStateContext()
  const totalPrice = cart.reduce(
    (acc, cartItem) => {
      return acc + cartItem.product.price * cartItem.count
    }, 0)

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