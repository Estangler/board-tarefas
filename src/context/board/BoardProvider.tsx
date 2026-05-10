import { useReducer, type ReactNode } from "react";
import { boardReducer } from "./boardReducer";
import { INITIAL_STATE } from "./initialState";
import type { Column, MoveTaskPayloadType, Task } from "../../types/board";
import { BoardContext } from "./BoardContext";

type BoardProviderProps = {
  children: ReactNode;
};

export default function BoardProvider({ children }: BoardProviderProps) {
  const [state, dispatch] = useReducer(boardReducer, INITIAL_STATE);

  const tasks = state.tasks;
  const total = state.tasks.length;
  const doneCount = state.tasks.filter((task) => task.column === "done").length;
  const progress = total === 0 ? 0 : (doneCount / total) * 100;

  function addTask(task: Omit<Task, "id" | "column">) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function deleteTask(id: number) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  function clearDoneTask() {
    dispatch({ type: "CLEAR_DONE" });
  }

  function moveTask(task: MoveTaskPayloadType) {
    dispatch({ type: "MOVE_TASK", payload: task });
  }

  function tasksByColumn(column: Column): Task[] {
    return tasks.filter((task) => task.column === column);
  }

  return (
    <BoardContext.Provider
      value={{
        tasksByColumn,
        progress,
        tasks,
        total,
        doneCount,
        addTask,
        deleteTask,
        clearDoneTask,
        moveTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
