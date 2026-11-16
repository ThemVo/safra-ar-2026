import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.css";
import { resetOnReload } from "./utils/resetOnReload.js";

resetOnReload(
  ["uat", "prod"].includes(import.meta.env.NODE_ENV)
    ? import.meta.env.NODE_ENV
    : import.meta.env.MODE,
);

// No StrictMode: its double-mount would start the artboard's timers twice.
createRoot(document.getElementById("root")).render(<App />);
