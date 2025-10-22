import type {FC} from "react";
import products from "../../data/products.json";
import {Layout} from "@ui/Layout";
import type {Product} from "@type/product.ts";
import {ProductCard} from "@ui/ProductCard.tsx";

export const ProductsList: FC = () => {
  return (
    <Layout header={'Products'}>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          productCount={1}
        />
      ))}
    </Layout>
  )
}