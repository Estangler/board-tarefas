import { COLUMNS } from "../../constants/columns";
import {
  type State,
  type AddTaskActionType,
  type DeleteTaskActionType,
  type MoveTaskActionType,
} from "../../types/board";

export function addTask(state: State, action: AddTaskActionType): State {
  return {
    ...state,
    nextId: state.nextId + 1,
    tasks: [
      ...state.tasks,
      { ...action.payload, id: state.nextId, column: "todo" },
    ],
  };
}

export function deleteTask(state: State, action: DeleteTaskActionType): State {
  return {
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload),
  };
}

export function clearDone(state: State): State {
  return {
    ...state,
    tasks: state.tasks.filter((task) => task.column !== "done"),
  };
}

export function moveTask(state: State, action: MoveTaskActionType): State {
  const { id, direction } = action.payload;
  const taskToMove = state.tasks.find((task) => task.id === id);

  if (!taskToMove) return state;

  const currentColumnIndex = COLUMNS.indexOf(taskToMove.column);

  const nextColumnIndex = currentColumnIndex + direction;

  const isInvalidIndex =
    nextColumnIndex < 0 || nextColumnIndex >= COLUMNS.length;

  if (isInvalidIndex) return state;

  const nextColumn = COLUMNS[nextColumnIndex];

  return {
    ...state,

    tasks: state.tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      return {
        ...task,
        column: nextColumn,
      };
    }),
  };
}
