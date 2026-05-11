import Column from "./Column";
import { COLUMNS } from "../../constants/columns";
import ProgressBar from "./ProgressBar";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
export default function Board() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <main className="space-y-5">
      <header className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Board de Tarefas</h1>
          <button
            className="px-4 py-2 rounded-lg bg-card hover:opacity-80"
            onClick={handleModal}
          >
            Add task
          </button>
        </div>
        <ProgressBar />

        <AddTaskModal modalState={isOpen} handleModal={handleModal} />
      </header>
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-2">
        {COLUMNS.map((col) => (
          <Column col={col} key={col} />
        ))}
      </section>
    </main>
  );
}
