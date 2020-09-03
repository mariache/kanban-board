import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColomnProps {
  text: string;
}

export const Column: React.FC<ColomnProps> = ({
  text,
  children,
}: React.PropsWithChildren<ColomnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
