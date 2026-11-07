import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={`flex gap-2 px-5 py-2.5 rounded-lg font-medium
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors items-center w-full border-2 text-center ${className}`}
    >
      <button ref={ref} {...props} className="w-full">
        {children}
      </button>
    </div>
  );
});
