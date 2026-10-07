import { useCheckAuthLocalStorageToken } from "@/shared/hooks";
import { PropsWithChildren } from "react";

export const CheckAuthLayout = ({ children }: PropsWithChildren) => {
  useCheckAuthLocalStorageToken();

  return <>{children}</>;
};
