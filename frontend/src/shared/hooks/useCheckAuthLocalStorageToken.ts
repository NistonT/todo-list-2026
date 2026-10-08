import type { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { pageRouter } from "../consts/page-router";

export const useCheckAuthLocalStorageToken = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  useEffect(() => {
    const auth = localStorage.getItem("token");

    if (!auth || !isAuth) {
      navigate(pageRouter.AUTH);
    }
  }, [navigate, isAuth]);
};
