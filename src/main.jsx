import React from "react";
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
