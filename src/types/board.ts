export type Priority = "low" | "medium" | "high";
export type Column = "todo" | "doing" | "done";
export type Direction = 1 | -1;

export type MoveTaskPayloadType = {
  id: number;
  currentColumn: Column;
  direction: Direction;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  column: Column;
};

export type State = {
  tasks: Task[];
  nextId: number;
};

export type AddTaskActionType = {
  type: "ADD_TASK";
  payload: Omit<Task, "id" | "column">;
};

export type DeleteTaskActionType = {
  type: "DELETE_TASK";
  payload: number;
};

export type MoveTaskType = {
  type: "MOVE_TASK";
  payload: MoveTaskPayloadType;
};

export type Action =
  | { type: "ADD_TASK"; payload: Omit<Task, "id" | "column"> }
  | { type: "MOVE_TASK"; payload: MoveTaskPayloadType }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "CLEAR_DONE" };
