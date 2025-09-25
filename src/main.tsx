// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "nes.css/css/nes.min.css"; // NES.css global
import "./index.css";             // eigene globale Styles
import App from "./App";
import "./global.css"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
