import React from "react";
import { AddItemButton } from "./styles";
import NewItemForm from "./NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem: React.FC<AddNewItemProps> = ({
  onAdd,
  dark,
  toggleButtonText,
}) => {
  const [showForm, setShowForm] = React.useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
