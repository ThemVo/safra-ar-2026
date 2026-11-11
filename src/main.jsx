import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.css";

// No StrictMode: its double-mount would start the artboard's timers twice.
createRoot(document.getElementById("root")).render(<App />);
