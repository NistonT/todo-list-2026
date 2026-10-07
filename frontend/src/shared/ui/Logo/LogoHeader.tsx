import { NAME_SITE } from "@/shared/consts/constants";

export const LogoHeader = () => {
  return (
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">{NAME_SITE}</span>
    </div>
  );
};
