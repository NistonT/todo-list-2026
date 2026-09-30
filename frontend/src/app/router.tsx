import { Route, Routes } from "react-router";
import { App } from "../pages/App";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
