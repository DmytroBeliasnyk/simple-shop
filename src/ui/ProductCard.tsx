import {type FC, useState} from "react";
import type {Product} from "@type/product.ts";
import {Button} from "@ui/Button.tsx";
import {FaCartPlus, FaRegTrashAlt} from "react-icons/fa";
import {useCartContext} from "../features/cart/сartContext.ts";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

type ProductCardProps = {
  product: Product;
  productCount: number;
  cartItemId?: string
}

export const ProductCard: FC<ProductCardProps> = ({product, productCount, cartItemId}) => {
  const [count, setCount] = useState<number>(productCount)
  const {addToCart, removeFromCart, incrementProductCount, decrementProductCount} = useCartContext()

  function incrementCount() {
    setCount(prev => prev + 1)
    if (cartItemId) incrementProductCount(cartItemId)
  }

  function decrementCount() {
    setCount(prev => Math.max(1, prev - 1))
    if (cartItemId) decrementProductCount(cartItemId)
  }

  return (
    <div className="flex justify-between p-4 rounded-sm bg-bg-surface">
      <div className="flex flex-col">
        <h2 className="text-xl">{product.title}</h2>
        <span className="text-text-secondary text-xs">{`Product ID: ${product.id}`}</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-2xl text-text-primary font-semibold">
          {!cartItemId ? product.price : product.price * count}
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
              if (!cartItemId) {
                addToCart(product, count)
                setCount(1)
              } else {
                removeFromCart(cartItemId)
              }
            }}>
            {!cartItemId ? <FaCartPlus/> : <FaRegTrashAlt/>}
          </Button>
        </div>
      </div>
    </div>
  )
}