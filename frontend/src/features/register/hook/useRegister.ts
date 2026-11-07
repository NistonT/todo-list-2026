import { addUser } from "@/entities/user/store/slice";
import { savedAuthForm } from "@/features/auth/utils/savedAuthForm";
import { auth } from "@/features/choice-auth/store/slice";
import { pageRouter } from "@/shared/consts/page-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useRegisterMutation } from "../api";
import { registerSchema, TRegisterFormData } from "../model/schema";

export const useRegister = () => {
  const [reg, { isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: savedAuthForm(),
  });

  const onSubmit = async (data: TRegisterFormData) => {
    try {
      const { confirmPassword, ...authData } = data;

      if (confirmPassword !== authData.password) {
        toast.error("Passwords do not match");
        return;
      }

      const user = await reg(authData).unwrap();
      await dispatch(addUser(user.user_data));
      toast.success("Successfully authorized!");
      navigate(pageRouter.HOME);
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error. Please try again.");
    }
  };

  const handleAuth = () => {
    dispatch(auth());
  };

  const onTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { isLoading, register, handleSubmit, errors, onSubmit, handleAuth, onTogglePassword, showPassword };
};
