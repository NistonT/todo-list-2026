import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionProvider } from "./providers/MotionProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  // Providers
  <RouterProvider>
    <StoreProvider>
      <MotionProvider>
        {/* Router */}
        <Router />
      </MotionProvider>
    </StoreProvider>
  </RouterProvider>,
);
