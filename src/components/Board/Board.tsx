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
            className="px-2 py-1 rounded-lg bg-orange-600 hover:bg-orange-700"
            onClick={handleModal}
          >
            Add task
          </button>
        </div>
        <ProgressBar />

        <AddTaskModal modalState={isOpen} handleModal={handleModal} />
        <div></div>
      </header>
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-2">
        {COLUMNS.map((col) => (
          <Column col={col} key={col} />
        ))}
      </section>
    </main>
  );
}
