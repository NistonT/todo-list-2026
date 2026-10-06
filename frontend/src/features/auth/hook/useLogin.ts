import type { RootState } from "@/app/store/store";
import { addUser } from "@/entities/user/store/slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useLoginMutation } from "../api";
import { loginSchema, type TLoginFormData } from "../model/schema";

export const useLogin = () => {
  const [login, { isLoading }] = useLoginMutation();
  const userData = useSelector((state: RootState) => state.user.data);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: TLoginFormData) => {
    try {
      await login(data).unwrap();
      const {} = data;

      await dispatch(addUser({}));
      toast.success("Successfully authorized!");
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error. Please try again.");
    }
  };

  return { isLoading, register, handleSubmit, errors, onSubmit };
};
