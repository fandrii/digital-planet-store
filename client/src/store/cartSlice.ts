import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      state.totalQuantity++;

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // state.items = state.items.filter((item) => item.id !== action.payload);

      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (!item) {
        return;
      }
      state.totalQuantity--;

      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        item.totalPrice -= item.price;
        --item.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
