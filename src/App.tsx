import {type FC} from "react";
import {ProductsList} from "./features/products/ProductsList.tsx";
import {Cart} from "./features/cart/Cart.tsx";
import {CartContextProvider} from "./features/cart/CartContextProvider.tsx";

export const App: FC = () => {
  return (
    <div className="flex justify-center w-screen h-screen py-4 text-text-primary text-base bg-bg-primary">
      <main className="flex w-2/3 gap-4">
        <CartContextProvider>
          <ProductsList/>
          <Cart/>
        </CartContextProvider>
      </main>
    </div>
  )
}