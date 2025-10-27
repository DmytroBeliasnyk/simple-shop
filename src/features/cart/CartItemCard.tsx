import {type FC, memo} from "react";
import type {Product} from "@type/product.ts";
import {Button} from "@ui/Button.tsx";
import {FaRegTrashAlt} from "react-icons/fa";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import type {CartItemId} from "@type/cartItem.ts";
import {useAppDispatch} from "../../store.ts";
import {cartSlice} from "./cartSlice.ts";

type ProductCardProps = {
  product: Product;
  productCount: number;
  cartItemId: CartItemId;
}

export const CartItemCard: FC<ProductCardProps> = memo(({product, productCount, cartItemId}) => {
  const dispatch = useAppDispatch()

  const incrementCount = () =>
    dispatch(cartSlice.actions.incrementProductCount({cartItemId}))
  const decrementCount = () =>
    dispatch(cartSlice.actions.decrementProductCount({cartItemId}))

  return (
    <div className="flex justify-between p-4 rounded-sm bg-bg-surface">
      <div className="flex flex-col">
        <h2 className="text-xl">{product.title}</h2>
        <span className="text-text-secondary text-xs">{`Product ID: ${product.id}`}</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-2xl text-text-primary font-semibold">
          {product.price}
        </span>
        <div className="flex gap-2">
          <div className="flex items-center text-sm">
            <FaAngleLeft
              className="cursor-pointer"
              onClick={decrementCount}
            />
            <span>{productCount}</span>
            <FaAngleRight
              className="cursor-pointer"
              onClick={incrementCount}
            />
          </div>
          <Button
            type={'button'}
            onClick={() => dispatch(cartSlice.actions.removeItem({cartItemId}))}
          >
            <FaRegTrashAlt/>
          </Button>
        </div>
      </div>
    </div>
  )
})