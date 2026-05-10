import type { Action, State } from "../../types/board";
import { addTask, deleteTask, clearDone, moveTask } from "./helpers";

export function boardReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TASK":
      return addTask(state, action);

    case "DELETE_TASK":
      return deleteTask(state, action);

    case "CLEAR_DONE":
      return clearDone(state);

    case "MOVE_TASK":
      return moveTask(state, action);

    default:
      return state;
  }
}
