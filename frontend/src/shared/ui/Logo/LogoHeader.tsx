import { NAME_SITE } from "@/shared/consts/constants";
import { m } from "motion/react";

export const LogoHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-4 md:mb-0">
      <m.span
        className="text-5xl font-phoenix text-gray-900"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {NAME_SITE}
      </m.span>
    </div>
  );
};
