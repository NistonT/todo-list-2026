import { LogoHeader } from "@/shared/ui";

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <LogoHeader />
      </div>
    </header>
  );
};
