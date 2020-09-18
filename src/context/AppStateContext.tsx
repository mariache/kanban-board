import { AppStateType } from "../types";
import React, { useContext, useReducer, createContext } from "react";
import { ADD_LIST, ADD_TASK } from "./constants";
import { appData } from "../testData";

export interface AppStateContextProps {
  state: AppStateType;
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
    };

const appStateReducer = (state: AppStateType, action: Action): AppStateType => {
  switch (action.type) {
    case ADD_LIST: {
      const visibilityExample = "Too visible";
      return { ...state };
    }
    case ADD_TASK: {
      const visibilityExample = "Too visible";
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
