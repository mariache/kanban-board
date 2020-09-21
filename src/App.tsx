import React from "react";
import { AppContainer } from "./components/styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./context/AppStateContext";
import { ADD_LIST } from "./context/constants";

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, idx) => (
        <Column id={list.id} text={list.text} key={list.id} index={idx} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: ADD_LIST, payload: text })}
      />
    </AppContainer>
  );
};

export default App;
