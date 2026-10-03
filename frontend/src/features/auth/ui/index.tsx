import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api";
import { loginSchema, TLoginFormData } from "../model/schema";

export const AuthForm = () => {
  const [login, { isLoading }] = useLoginMutation();

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("login")} type="text" placeholder="login" />
      <input {...register("password")} type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};
