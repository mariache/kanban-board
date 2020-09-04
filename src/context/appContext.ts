import { createContext } from "react";
import { AppStateProps } from "./AppStateProvider";

const appContext = createContext<AppStateProps>({} as AppStateProps);

export default appContext;
