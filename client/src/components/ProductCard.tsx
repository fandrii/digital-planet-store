import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Product } from "../types/Product";

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        maxWidth: 300,
        m: 2,
        borderRadius: 2,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500 }}
        >
          {product.name}
        </Typography>
        <Typography sx={{ fontWeight: "bold", color: "#1976d2" }}>${product.price}</Typography>

        <Box sx={{ mt: 1 }}>
          <Button
            onClick={() => dispatch(addToCart(product))}
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
