"use client";
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#e4f1fe",
      paper: "#22313f",
    },
    primary: {
      main: "#22313f",
    },
    secondary: {
      main: "#e4f1fe",
    },
    text: {
      primary: "#22313f",
      secondary: "#e4f1fe",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default Theme;
