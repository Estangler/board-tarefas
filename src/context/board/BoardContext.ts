import { createContext } from "react";
import type { Column, MoveTaskPayloadType, Task } from "../../types/board";

type BoardContextType = {
  tasksByColumn: (column: Column) => Task[];
  tasks: Task[];
  total: number;
  doneCount: number;
  progress: number;
  addTask: (task: Omit<Task, "id" | "column">) => void;
  deleteTask: (id: number) => void;
  clearDoneTask: () => void;
  moveTask: (task: MoveTaskPayloadType) => void;
};

export const BoardContext = createContext<BoardContextType | null>(null);
