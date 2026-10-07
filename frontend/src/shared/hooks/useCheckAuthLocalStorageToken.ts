import { useEffect } from "react";
import { useNavigate } from "react-router";
import { pageRouter } from "../consts/page-router";

export const useCheckAuthLocalStorageToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");

    if (!auth) {
      navigate(pageRouter.AUTH);
    }
  }, [navigate]);
};
