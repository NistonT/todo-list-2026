import { addUser } from "@/entities/user/store/slice";
import { pageRouter } from "@/shared/consts/page-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useLoginMutation } from "../api";
import { loginSchema, type TLoginFormData } from "../model/schema";
import { savedAuthForm } from "../utils/savedAuthForm";

export const useLogin = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: savedAuthForm(),
  });

  const onSubmit = async (data: TLoginFormData) => {
    try {
      const { remember, ...authData } = data;

      const user = await login(authData).unwrap();
      await dispatch(addUser(user.user_data));
      toast.success("Successfully authorized!");

      if (remember) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            login: authData.login,
            password: authData.password,
            remember,
          }),
        );
      } else {
        localStorage.removeItem("auth");
      }

      navigate(pageRouter.HOME);
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error. Please try again.");
    }
  };

  return { isLoading, register, handleSubmit, errors, onSubmit };
};
