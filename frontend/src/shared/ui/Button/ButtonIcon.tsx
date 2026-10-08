import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: LucideIcon;
  classNameButton?: string;
  children: ReactNode;
};

export const ButtonIcon = forwardRef<HTMLButtonElement, Props>(({ icon: Icon, className, classNameButton, children, ...props }, ref) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Icon && <Icon />}
      <button ref={ref} className={`${classNameButton}`} {...props}>
        {children}
      </button>
    </div>
  );
});
