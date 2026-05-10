import type {
  State,
  AddTaskActionType,
  DeleteTaskActionType,
  Column,
  MoveTaskType,
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

export const COLUMNS: Column[] = ["todo", "doing", "done"];

export function moveTask(state: State, action: MoveTaskType): State {
  const { id, currentColumn, direction } = action.payload;

  const currentColumnIndex = COLUMNS.indexOf(currentColumn);

  const nextColumnIndex = currentColumnIndex + direction;

  const isInvalidIndex =
    nextColumnIndex < 0 || nextColumnIndex >= COLUMNS.length;

  if (isInvalidIndex) {
    return state;
  }

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
