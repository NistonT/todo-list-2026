import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: LucideIcon;
  classNameButton?: string;
  children: ReactNode;
};

export const ButtonIcon = forwardRef<HTMLButtonElement, Props>(({ icon: Icon, className, classNameButton, children, ...props }, ref) => {
  return (
    <div
      className={`flex gap-2 px-5 py-2.5 rounded-lg font-medium
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors items-center ${className}`}
    >
      {Icon && <Icon />}
      <button ref={ref} className={` ${classNameButton}`} {...props}>
        {children}
      </button>
    </div>
  );
});
