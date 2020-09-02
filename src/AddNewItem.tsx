import React from "react";
import { AddItemButton } from "./styles";

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
    console.log("show form");
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
