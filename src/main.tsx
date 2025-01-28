import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import MainLayouts from "@pages/MainLayouts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayouts />
  </StrictMode>
);
