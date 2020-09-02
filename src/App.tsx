import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

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
