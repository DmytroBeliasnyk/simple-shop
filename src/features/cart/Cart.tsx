import {type FC} from "react";
import {Layout} from "@ui/Layout.tsx";
import {CartItemCard} from "./CartItemCard.tsx";
import {useAppSelector} from "../../store.ts";
import {cartSlice} from "./cartSlice.ts";

export const Cart: FC = () => {
  const cart = useAppSelector(cartSlice.selectors.selectCartItems)
  const totalPrice = useAppSelector(cartSlice.selectors.selectTotalPrice)

  return (
    <Layout
      header={'Cart'}
      footer={totalPrice > 0 ? <span>Total price: {totalPrice}</span> : null}
    >
      {cart.map(({product, count, id}) => (
        <CartItemCard
          key={id}
          product={product}
          productCount={count}
          cartItemId={id}
        />
      ))}
    </Layout>
  )
}