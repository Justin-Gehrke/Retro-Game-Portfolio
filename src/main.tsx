// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "nes.css/css/nes.min.css"; // NES.css global
import App from "./App";
import "./index.css"; // Global styles


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
