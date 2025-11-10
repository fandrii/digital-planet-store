import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Checkout } from "./pages/Checkout";
import { Container, Typography, Box, ThemeProvider } from "@mui/material";
import { CartButton } from "./components/CartButton";
import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontFamily: "'Dancing Script', cursive",
                  textTransform: "capitalize",
                  background: "linear-gradient(90deg, #ff6ec4, #7873f5, #4adede)",
                  backgroundSize: "300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 5s ease infinite",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                  },
                }}
              >
                Digital Planet
              </Typography>

              <CartButton />
            </Box>

            <Routes>
              <Route
                path="/"
                element={<ProductList />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/checkout"
                element={<Checkout />}
              />
            </Routes>
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
