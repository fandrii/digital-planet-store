import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { clearCart } from "../store/cartSlice";

const orderSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(5, "Address is too short"),
});

type OrderForm = z.infer<typeof orderSchema>;

export const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (data: OrderForm) => {
    console.log("Order:", data);
    console.log("Items:", cartItems);
    setSubmitted(true);
    dispatch(clearCart());
  };

  if (submitted) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Alert severity="success">Thank you for your order! 🎉</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center" }}
      >
        Checkout
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Place Order
        </Button>
      </form>
    </Box>
  );
};
