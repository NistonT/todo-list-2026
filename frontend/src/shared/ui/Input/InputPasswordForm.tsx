import { AlertCircle, Eye, EyeOff, type LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
  classNameInput?: string;
  error?: FieldError;
  onTogglePassword: () => void;
  showPassword: boolean;
};

export const InputPasswordForm = forwardRef<HTMLInputElement, Props>(
  ({ icon: Icon, className, classNameInput, error, onTogglePassword, showPassword, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <div className={`relative flex items-center ${className}`}>
          {Icon && <Icon className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />}

          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={`
              ${classNameInput}
              w-full px-4 py-2.5 rounded-lg border
              bg-white text-gray-900
              placeholder:text-gray-400
              ${Icon ? "pl-10" : ""}
              ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20"
              }
              focus:outline-none focus:ring-2
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors
            `}
            {...props}
          />

          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {error && (
          <div className="flex items-center gap-1.5 text-sm text-red-500">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error.message}</span>
          </div>
        )}
      </div>
    );
  },
);
