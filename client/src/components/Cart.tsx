import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart, addToCart } from "../store/cartSlice";
import { Box, Typography, Button, List, ListItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const totalSum = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  if (cart.length === 0) {
    return <Typography sx={{ mt: 3, textAlign: "center", fontSize: "1.2rem" }}>Your cart is empty 🛒</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center" }}
      >
        Your Cart
      </Typography>

      <List>
        {cart.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mb: 2,
              p: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Назва та ціни в одному рядку */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
              <Typography>(${item.price}/item)</Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#1976d2" }}>${item.totalPrice}</Typography>
            </Box>

            {/* Кількість і кнопки */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}>
              <Typography>x{item.quantity}</Typography>

              <Button
                size="small"
                onClick={() => dispatch(removeFromCart(item.id))}
                sx={{
                  border: "1px solid #1976d2",
                  borderRadius: "4px",
                  minWidth: "32px",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  },
                }}
              >
                -
              </Button>

              <Button
                size="small"
                onClick={() => dispatch(addToCart(item))}
                sx={{
                  border: "1px solid #1976d2",
                  borderRadius: "4px",
                  minWidth: "32px",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mt: 2 }}>Total: ${totalSum}</Typography>
      <Divider sx={{ my: 2 }} />

      <Button
        component={Link}
        to="/checkout"
        variant="contained"
        fullWidth
        sx={{ mb: 1 }}
      >
        Go to Checkout
      </Button>

      <Button
        component={Link}
        to="/"
        variant="outlined"
        fullWidth
      >
        Continue shopping
      </Button>
    </Box>
  );
};
