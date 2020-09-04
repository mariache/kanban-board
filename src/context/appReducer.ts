import { createContext } from "react";
import { AppStateProps } from "./AppState";

const appContext = createContext<AppStateProps>({} as AppStateProps);

export default appContext;
