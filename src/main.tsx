import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import AppRouter from "@routes/app.router";
import "./I18Next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
