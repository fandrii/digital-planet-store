import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export function CartButton() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log("LOG", totalQuantity);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      navigate("/cart");
    }
  };

  return (
    <Button
      variant="outlined"
      onClick={handleClick}
    >
      Cart {totalQuantity}
    </Button>
  );
}
