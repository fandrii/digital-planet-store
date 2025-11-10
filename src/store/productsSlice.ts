import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/Product";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const data = await response.json();

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return data as Product[];
});

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { products } from "../api/products";

// const productsSlice = createSlice({
//   name: "products",
//   initialState: products,
//   reducers: {},
// });

// export default productsSlice.reducer;
