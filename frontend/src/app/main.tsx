import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import { CheckAuthLayout, ContainerLayout, HeaderLayout } from "./layout";
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
            <CheckAuthLayout>
              {/* Blocks */}
              <Router />
              <Toaster position="bottom-right" richColors />
            </CheckAuthLayout>
          </ContainerLayout>
        </HeaderLayout>
      </MotionProvider>
    </StoreProvider>
  </RouterProvider>,
);
