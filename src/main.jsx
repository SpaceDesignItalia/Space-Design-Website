import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <Router>
      <App />
    </Router>
  </NextUIProvider>
);
