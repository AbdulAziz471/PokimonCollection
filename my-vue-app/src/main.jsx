import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, useTheme } from "./ThemeContext.jsx";
import { DataProvider } from "./DataContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
