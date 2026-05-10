import Column from "./Column";
import { COLUMNS } from "../../constants/columns";
import ProgressBar from "./ProgressBar";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
export default function Board() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModal() {
    return setIsOpen(!isOpen);
  }
  return (
    <main>
      <header>
        <h1>Board de Tarefas</h1>
        <button className="border px-2" onClick={handleModal}>
          Add task
        </button>
        <AddTaskModal modalState={isOpen} handleModal={handleModal} />
        <div>
          <ProgressBar />
        </div>
      </header>
      {COLUMNS.map((col) => (
        <Column col={col} key={col} />
      ))}
    </main>
  );
}
