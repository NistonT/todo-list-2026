import { Button, InputCheckboxForm, InputForm, InputPasswordForm, LinkForm, TitleForm } from "@/shared/ui";
import { KeyRound, User } from "lucide-react";
import { useLogin } from "../hook/useLogin";

export const AuthForm = () => {
  const { isLoading, register, handleSubmit, errors, onSubmit, handleAuth, onTogglePassword, showPassword } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl shadow-indigo-500/10 p-8 space-y-5">
      <TitleForm>Добро пожаловать</TitleForm>

      <InputForm {...register("login")} type="text" placeholder="Логин" icon={User} error={errors.login} />

      <InputPasswordForm
        onTogglePassword={onTogglePassword}
        showPassword={showPassword}
        {...register("password")}
        placeholder="Пароль"
        icon={KeyRound}
        error={errors.password}
      />

      <InputCheckboxForm {...register("remember")}>Запомнить меня</InputCheckboxForm>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Вход..." : "Войти"}
      </Button>

      <LinkForm label={"Нет аккаунта?"} text={"Зарегистрироваться"} onClick={handleAuth} />
    </form>
  );
};
