import React from "react";
import { AppContainer } from "./components/styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate scaffolding" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to se static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
