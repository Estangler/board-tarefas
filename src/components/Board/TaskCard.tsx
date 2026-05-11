import { useBoard } from "../../hook/useBoard";
import type { Direction, Task } from "../../types/board";
import { ArrowLeft, X, ArrowRight } from "lucide-react";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, moveTask } = useBoard();
  const prioVariant = {
    low: "Baixa",
    medium: "Média",
    high: "Alta",
  };

  const priorityBgVariant = {
    low: "bg-green-600/20 text-green-600",
    medium: "bg-yellow-600/20 text-yellow-600",
    high: "bg-red-600/20 text-red-600",
  };

  function handleMoveTask(direction: Direction) {
    moveTask({
      id: task.id,
      direction,
    });
  }
  return (
    <article className="flex flex-col mt-2 p-2 bg-card text-gray-50 rounded-lg">
      <header className="flex justify-between items-center text-base font-semibold">
        <h2>{task.title}</h2>
        <button onClick={() => deleteTask(task.id)} className="cursor-pointer">
          <X size={16} />
        </button>
      </header>

      <section className="my-5">
        <div className="text-sm">{task.description}</div>
      </section>

      <footer className="mt-5 flex items-end justify-between">
        <p className={`text-sm px-0.5 ${priorityBgVariant[task.priority]}`}>
          {prioVariant[task.priority]}
        </p>

        <div className="flex gap-1">
          {task.column !== "todo" && (
            <button
              onClick={() => handleMoveTask(-1)}
              className="bg-green-400 p-1 rounded-lg hover:bg-green-500"
            >
              <ArrowLeft size={16} />
            </button>
          )}

          {task.column !== "done" && (
            <button
              onClick={() => handleMoveTask(1)}
              className="bg-green-400 p-1 rounded-lg hover:bg-green-500"
            >
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
