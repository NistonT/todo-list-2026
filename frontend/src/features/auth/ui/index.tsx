import { InputForm } from "@/shared/ui";
import { KeyRound, User } from "lucide-react";
import { useLogin } from "../hook/useLogin";

export const AuthForm = () => {
  const { isLoading, register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm {...register("login")} type="text" placeholder="Login" icon={User} />
      <InputForm {...register("password")} type="password" placeholder="password" icon={KeyRound} />
      {errors && <div>{errors.login?.message}</div>}
      {errors && <div>{errors.password?.message}</div>}
      <input type="checkbox" {...register("remember")} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};
