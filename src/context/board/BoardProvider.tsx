import { useReducer, type ReactNode } from "react";
import { BoardContext } from "./boardContext";
import { boardReducer } from "./boardReducer";
import { INITIAL_STATE } from "./initialState";
import type { MoveTaskPayloadType, Task } from "../../types/board";

type BoardProviderProps = {
  children: ReactNode;
};

export default function BoardProvider({ children }: BoardProviderProps) {
  const [state, dispatch] = useReducer(boardReducer, INITIAL_STATE);

  const tasks = state.tasks;
  console.log(tasks);

  function AddTask(task: Omit<Task, "id" | "column">) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function DeleteTask(id: number) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  function ClearDoneTask() {
    dispatch({ type: "CLEAR_DONE" });
  }

  function MoveTask(task: MoveTaskPayloadType) {
    dispatch({ type: "MOVE_TASK", payload: task });
  }
  return (
    <BoardContext.Provider
      value={{
        AddTask,
        DeleteTask,
        ClearDoneTask,
        MoveTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
