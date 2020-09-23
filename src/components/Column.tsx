import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../context/AppStateContext";
import { Card } from "./Card";
import { ADD_TASK, MOVE_LIST, COLUMN } from "../context/constants";
import { useItemDrag } from "../utils/useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "../DragItem";
import { isHidden } from "../utils/isHidden";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: COLUMN,
    hover(item: DragItem) {
      if (item.type === COLUMN) {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({ type: MOVE_LIST, payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
      }
    },
  });

  const { drag } = useItemDrag({ type: COLUMN, id, index, text });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(state.draggedItem, COLUMN, id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, idx) => (
        <Card text={task.text} key={task.id} index={idx} />
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
