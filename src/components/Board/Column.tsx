import { useBoard } from "../../hook/useBoard";
import type { Column } from "../../types/board";

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
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}
