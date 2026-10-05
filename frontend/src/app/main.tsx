import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import { ContainerLayout, HeaderLayout } from "./layout";
import { MotionProvider, RouterProvider, StoreProvider } from "./providers";
import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  // Provider
  <RouterProvider>
    <StoreProvider>
      <MotionProvider>
        {/* Layout */}
        <HeaderLayout>
          <ContainerLayout>
            {/* Blocks */}
            <Router />
            <Toaster position="bottom-right" richColors />
          </ContainerLayout>
        </HeaderLayout>
      </MotionProvider>
    </StoreProvider>
  </RouterProvider>,
);
