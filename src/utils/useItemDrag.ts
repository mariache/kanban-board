import { useDrag } from "react-dnd";
import { useAppState } from "../context/AppStateContext";
import { DragItem } from "../DragItem";
import { SET_DRAGGED_ITEM } from "../context/constants";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: SET_DRAGGED_ITEM,
        payload: item,
      }),
    end: () => dispatch({ type: SET_DRAGGED_ITEM, payload: undefined }),
  });
  return { drag };
};
