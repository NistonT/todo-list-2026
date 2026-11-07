import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
};

export const InputCheckboxForm = forwardRef<HTMLInputElement, Props>(({ children, ...props }, ref) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none group">
      <input ref={ref} type="checkbox" {...props} className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{children}</span>
    </label>
  );
});
