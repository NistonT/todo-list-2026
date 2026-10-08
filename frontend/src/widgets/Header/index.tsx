import type { RootState } from "@/app/store/store";
import { useLogout } from "@/features/logout/useLogout";
import { ButtonIcon, LogoHeader } from "@/shared/ui";
import { useSelector } from "react-redux";

export const Header = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const { handleLogout } = useLogout();

  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex justify-between w-full">
        <LogoHeader />

        {isAuth && <ButtonIcon onClick={handleLogout}>Logout</ButtonIcon>}
      </div>
    </header>
  );
};
