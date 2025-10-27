import {type FC, useState} from "react";
import type {Product} from "@type/product.ts";
import {Button} from "@ui/Button.tsx";
import {FaCartPlus} from "react-icons/fa";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {useAppDispatch} from "../../store.ts";
import {cartSlice} from "../cart/cartSlice.ts";

type ProductCardProps = {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({product}) => {
  const [count, setCount] = useState<number>(1)
  const dispatch = useAppDispatch()

  function incrementCount() {
    setCount(prev => prev + 1)
  }

  function decrementCount() {
    setCount(prev => Math.max(1, prev - 1))
  }

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
            <span>{count}</span>
            <FaAngleRight
              className="cursor-pointer"
              onClick={incrementCount}
            />
          </div>
          <Button
            type={'button'}
            onClick={() => {
              dispatch(cartSlice.actions.addItem({product, count}))
              setCount(1)
            }}>
            <FaCartPlus/>
          </Button>
        </div>
      </div>
    </div>
  )
}