import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchProducts } from "../store/productsSlice";
import { ProductCard } from "./ProductCard";

import { Box, CircularProgress, Typography } from "@mui/material";

export const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </Box>
  );
};

// import { useEffect, useState } from "react";
// import { ProductCard } from "./ProductCard";
// import { Box } from "@mui/material";
// import { Product } from "../types/Product";

// export const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products") // сервер Express
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//       {products.map((p) => (
//         <ProductCard
//           key={p.id}
//           product={p}
//         />
//       ))}
//     </Box>
//   );
// };

// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { ProductCard } from "./ProductCard";
// import { Box } from "@mui/material";

// export const ProductList = () => {
//   const products = useSelector((state: RootState) => state.products);

//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//       {products.map((p) => (
//         <ProductCard
//           key={p.id}
//           product={p}
//         />
//       ))}
//     </Box>
//   );
// };
