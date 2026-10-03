import { AuthPage, HomePage } from "@/pages";
import { pageRouter } from "@/shared/consts/page-router";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path={pageRouter.HOME} element={<HomePage />} />
      <Route path={pageRouter.AUTH} element={<AuthPage />} />
    </Routes>
  );
};
