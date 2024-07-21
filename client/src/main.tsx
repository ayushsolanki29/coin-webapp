import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import StoreContextProvider from "./context/StoreContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);
