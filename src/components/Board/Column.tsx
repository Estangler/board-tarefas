import { useBoard } from "../../hook/useBoard";
import type { Column } from "../../types/board";
import TaskCard from "./TaskCard";

type ColumnProps = {
  col: Column;
};
type ColVariantType = {
  todo: string;
  doing: string;
  done: string;
};

export default function Column({ col }: ColumnProps) {
  const { tasksByColumn, taskstodo, tasksdoing, doneCount, clearDoneTask } =
    useBoard();
  const count = {
    todo: taskstodo,
    doing: tasksdoing,
    done: doneCount,
  };

  const colVariant: ColVariantType = {
    todo: "A fazer",
    doing: "Fazendo",
    done: "Feito",
  };

  const tasks = tasksByColumn(col);

  return (
    <div>
      <div className="text-center bg-card p-2 rounded-lg flex justify-between items-center gap-1">
        <div className="flex items-center gap-1">
          <h1>{colVariant[col]}</h1>
          <p className="bg-body-secondary w-fit h-fit flex items-center text-body rounded-full text-[10px] px-2">
            {count[col]}
          </p>
        </div>
        {col === "done" && (
          <button
            className="underline text-[10px] text-body-secondary"
            onClick={clearDoneTask}
          >
            Limpar
          </button>
        )}
      </div>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
