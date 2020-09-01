import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
  text: string;
}

export const Card: React.FC<CardProps> = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
