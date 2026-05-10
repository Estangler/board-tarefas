import { useBoard } from "../../hook/useBoard";
import type { Direction, Task } from "../../types/board";
import { ArrowLeft, X, ArrowRight } from "lucide-react";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, moveTask } = useBoard();

  function handleMoveTask(direction: Direction) {
    moveTask({
      id: task.id,
      direction,
    });
  }
  return (
    <article className="flex flex-col border border-black">
      <header>
        <h2>{task.title}</h2>
        <button onClick={() => deleteTask(task.id)}>
          <X />
        </button>
      </header>

      <section>
        <p>{task.description}</p>
      </section>

      <footer>
        <p>{task.priority}</p>

        <div>
          {task.column !== "todo" && (
            <button onClick={() => handleMoveTask(-1)}>
              <ArrowLeft />
            </button>
          )}

          {task.column !== "done" && (
            <button onClick={() => handleMoveTask(1)}>
              <ArrowRight />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
