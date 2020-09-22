import { AppState } from "../types";
import React, { useContext, useReducer, createContext } from "react";
import { ADD_LIST, ADD_TASK, MOVE_LIST } from "./constants";
import { nanoid } from "nanoid";
import { appData } from "../testData";
import { findItemIndexById } from "../utils/findItemIndexById";
import { moveItem } from "../movieItem";

export interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    }
  | {
      type: "MOVE_LIST";
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ADD_LIST: {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case ADD_TASK: {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    case MOVE_LIST: {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
