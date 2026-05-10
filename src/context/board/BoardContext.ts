import { createContext } from "react";
import type { MoveTaskPayloadType, Task } from "../../types/board";

type BoardContextType = {
  AddTask: (task: Omit<Task, "id" | "column">) => void;
  DeleteTask: (id: number) => void;
  ClearDoneTask: () => void;
  MoveTask: (task: MoveTaskPayloadType) => void;
};

export const BoardContext = createContext<BoardContextType | null>(null);
