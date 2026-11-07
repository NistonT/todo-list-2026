import { deleteUser } from "@/entities/user/store/slice";
import { pageRouter } from "@/shared/consts/page-router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(deleteUser());
      localStorage.removeItem("token");
      navigate(pageRouter.AUTH);
      toast.success("Logout");
    } catch {
      toast.error("Error");
    }
  };

  return { handleLogout };
};
