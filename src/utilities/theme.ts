"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Prompt-Regular",
  },
  components: {
    MuiIconButton: {
      // Some CSS
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2f3045",
          },
        },
      },
    },
  },
});

export default theme;
