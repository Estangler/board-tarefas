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

  function handleMoveTask(direction: Direction) {
    moveTask({
      id: task.id,
      direction,
    });
  }
  return (
    <article className="flex flex-col mt-2 p-2 bg-gray-950/10 text-gray-50 rounded-lg backdrop-blur-sm shadow-lg shadow-olive-50/30">
      <header className="flex justify-between items-center text-base font-semibold">
        <h2>{task.title}</h2>
        <button onClick={() => deleteTask(task.id)} className="cursor-pointer">
          <X size={16} />
        </button>
      </header>

      <section className="my-5">
        <p className="text-sm">{task.description}</p>
      </section>

      <footer className="mt-5 flex items-end justify-between">
        <p className="text-sm w-fit border rounded-lg px-1">
          {prioVariant[task.priority]}
        </p>

        <div className="flex gap-1">
          {task.column !== "todo" && (
            <button
              onClick={() => handleMoveTask(-1)}
              className="bg-amber-400 p-1 rounded-lg hover:bg-amber-500"
            >
              <ArrowLeft size={16} />
            </button>
          )}

          {task.column !== "done" && (
            <button
              onClick={() => handleMoveTask(1)}
              className="bg-amber-400 p-1 rounded-lg hover:bg-amber-500"
            >
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
