import React from "react";
import { useDragLayer } from "react-dnd";
import { Column } from "./components/Column";
import { CustomDragLayerContainer } from "./components/styles";

const CustomDragLayer: React.FC = () => {
  const { isDragging, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column
        id={item.id}
        text={item.text}
        index={item.index}
        isPreview={true}
      />
    </CustomDragLayerContainer>
  ) : null;
};
export default CustomDragLayer;
