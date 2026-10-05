import { Container } from "@/shared/ui";
import { PropsWithChildren } from "react";

export const ContainerLayout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
