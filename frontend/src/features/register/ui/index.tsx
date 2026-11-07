import { Button, InputForm, InputPasswordForm, LinkForm, TitleForm } from "@/shared/ui";
import { KeyRound, User } from "lucide-react";
import { useRegister } from "../hook/useRegister";

export const RegisterForm = () => {
  const { isLoading, register, handleSubmit, errors, onSubmit, handleAuth, onTogglePassword, showPassword } = useRegister();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl shadow-indigo-500/10 p-8 space-y-5">
      <TitleForm>Добро пожаловать</TitleForm>

      <div className="space-y-1.5">
        <InputForm {...register("login")} type="text" placeholder="Логин" icon={User} error={errors.login} />
      </div>

      <div className="space-y-1.5">
        <InputPasswordForm
          {...register("password")}
          placeholder="Пароль"
          icon={KeyRound}
          onTogglePassword={onTogglePassword}
          showPassword={showPassword}
          error={errors.password}
        />
      </div>

      <div className="space-y-1.5">
        <InputForm type="password" {...register("confirmPassword")} placeholder="Повторите пароль" icon={KeyRound} error={errors.confirmPassword} />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Создание..." : "Создать"}
      </Button>

      <LinkForm label={"Есть аккаунт?"} text={"Войти"} onClick={handleAuth} />
    </form>
  );
};
