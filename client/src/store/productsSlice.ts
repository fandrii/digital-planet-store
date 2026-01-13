import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("http://localhost:5000/products");
  console.log("BACKEND DATA:", response.data);
  // const data = response.data;

  // export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  //   const response = await fetch("http://localhost:5000/api/products");
  //   const data = await response.json();

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const normalizeProduct = (data: any): Product => ({
    id: Number(data.id),
    name: data.name,
    price: Number(data.price),
    category: data.category,
    image: data.image,
    description: data.description,
  });

  return response.data.map(normalizeProduct);
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
