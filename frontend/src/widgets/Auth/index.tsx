import type { RootState } from "@/app/store/store";
import { AuthForm } from "@/features/auth/ui";
import { RegisterForm } from "@/features/register/ui";
import { useSelector } from "react-redux";

export const Auth = () => {
  const choiceAuth = useSelector((state: RootState) => state.choice.isAuth);

  return <div>{choiceAuth ? <AuthForm /> : <RegisterForm />}</div>;
};
