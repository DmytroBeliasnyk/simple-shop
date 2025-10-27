import {createSelector, createSlice, nanoid, type PayloadAction} from "@reduxjs/toolkit";
import type {CartItem, CartItemId} from "@type/cartItem.ts";
import type {Product} from "@type/product.ts";

type CartState = {
  entities: Record<CartItemId, CartItem>;
}

const initialCartState: CartState = {entities: {}}

const selectEntities = (state: CartState) => state.entities

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  selectors: {
    selectCartItems: createSelector(
      [selectEntities],
      entities => Object.values(entities)
    ),
    selectTotalPrice: createSelector(
      [selectEntities],
      entities => Object.values(entities).reduce(
        (sum, {product, count}) => sum + product.price * count, 0
      )),
  },
  reducers: {
    addItem: (state, action: PayloadAction<{ product: Product, count: number }>) => {
      const {product, count} = action.payload
      const newCartItemId = nanoid()

      state.entities[newCartItemId] = {
        product: product,
        id: newCartItemId,
        count: count
      }
    },
    removeItem: (state, action: PayloadAction<{ cartItemId: CartItemId }>) => {
      delete state.entities[action.payload.cartItemId]
    },
    incrementProductCount: (state, action: PayloadAction<{ cartItemId: CartItemId }>) => {
      const item = state.entities[action.payload.cartItemId]
      if (item) item.count += 1
    },
    decrementProductCount: (state, action: PayloadAction<{ cartItemId: CartItemId }>) => {
      const item = state.entities[action.payload.cartItemId]
      if (item) item.count = Math.max(1, item.count - 1)
    },
  },
})