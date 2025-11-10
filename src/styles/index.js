import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const overrides = {
  palette: {
    // primary: {
    //   main: Colors.secondary,
    // },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.body_bg,
      paper: Colors.white,
    },
    text: {
      primary: Colors.shaft,
      secondary: Colors.muted,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, // costums breakpoint
      lg: 1200,
      xl: 1536,
    },
  },
};

const theme = createTheme(overrides);
export { overrides };
export default theme;
