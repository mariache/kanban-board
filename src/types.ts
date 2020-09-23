import { DragItem } from "./DragItem";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  draggedItem: DragItem | undefined;
  lists: List[];
}
