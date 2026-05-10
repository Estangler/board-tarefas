import { useBoard } from "../../hook/useBoard";
import type { Column } from "../../types/board";
import TaskCard from "./TaskCard";

type ColumnProps = {
  col: Column;
};

export default function Column({ col }: ColumnProps) {
  const { tasksByColumn } = useBoard();

  const tasks = tasksByColumn(col);

  return (
    <div>
      <h1>{col}</h1>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
