import { createRoot } from "react-dom/client";
import { App } from "./App";
import "css-to-go";

try {
    const domRoot = document.querySelector(".app");
    const reactRoot = createRoot(domRoot);
    reactRoot.render(<App />);
} catch (err) {
    console.error("Aj, ", err);
}
