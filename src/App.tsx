import React from "react";
import { AppContainer } from "./components/styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./context/AppStateProvider";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, idx) => (
        <Column text={list.text} key={list.id} index={idx} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
