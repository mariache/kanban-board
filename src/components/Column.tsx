import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../context/AppStateContext";
import { Card } from "./Card";
import { ADD_TASK } from "../context/constants";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column: React.FC<ColumnProps> = ({
  text,
  index,
  id,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: ADD_TASK, payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
