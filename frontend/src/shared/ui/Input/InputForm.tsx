import type { LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
  classNameInput?: string;
};

export const InputForm = forwardRef<HTMLInputElement, Props>(({ icon: Icon, className, classNameInput, ...props }, ref) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Icon && <Icon />}
      <input ref={ref} className={`${classNameInput}`} {...props} />
    </div>
  );
});
