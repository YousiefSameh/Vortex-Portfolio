import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="text-3xl underline">بداية المشروع</div>
	</StrictMode>
)