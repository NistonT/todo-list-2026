import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const TitleForm = ({ children }: Props) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold text-gray-900">{children}</h2>
    </div>
  );
};
