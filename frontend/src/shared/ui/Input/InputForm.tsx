import type { LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
  classNameInput?: string;
};

export const InputForm = forwardRef<HTMLInputElement, Props>(({ icon: Icon, className, classNameInput, ...props }, ref) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {Icon && <Icon className="absolute left-3 w-5 h-5 pointer-events-none" />}
      <input
        ref={ref}
        className={`
            ${classNameInput} w-full px-4 py-2.5 rounded-lg border
            bg-white text-gray-900
            placeholder:text-gray-400
            ${Icon ? "pl-10" : ""}
            focus:outline-none focus:ring-2
            disabled:bg-gray-100 disabled:cursor-not-allowed
            transition-colors
          `}
        {...props}
      />
    </div>
  );
});
