import { createRoot } from "react-dom/client"
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"
import "./index.css"
import { StrictMode } from "react"

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
  },
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
