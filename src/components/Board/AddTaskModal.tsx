import Modal from "react-modal";
import type { Priority, Task } from "../../types/board";
import { useState } from "react";
import { useBoard } from "../../hook/useBoard";
type AddTaskModalProps = {
  modalState: boolean;
  handleModal: () => void;
};

export default function AddTaskModal({
  handleModal,
  modalState,
}: AddTaskModalProps) {
  const [titleInput, setTitleInput] = useState<string>("");

  const [descriptionInput, setDescriptionInput] = useState<string>("");

  const [priority, setPriority] = useState<Priority>("high");
  const priorities: Priority[] = ["low", "medium", "high"];
  const prioVariant = {
    low: "Baixa",
    medium: "Média",
    high: "Alta",
  };

  const { addTask } = useBoard();

  function handleTitleValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setTitleInput(value);
  }

  function handleDescriptionValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setDescriptionInput(value);
  }

  function handlePriorityTask(priority: Priority) {
    setPriority(priority);
  }

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: Omit<Task, "id" | "column"> = {
      title: titleInput,
      description: descriptionInput,
      priority: priority,
    };

    addTask(newTask);
    setTitleInput("");
    setDescriptionInput("");
    handleModal();
    setPriority("medium");
  }

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={handleModal}
      contentLabel="Modal to add new task."
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex items-center justify-center"
      }
      className={"border p-10 rounded-2xl"}
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-10 ">
        <header>
          <h1>Nova Tarefa</h1>
        </header>
        <label htmlFor="titleInput">
          <p>Titulo *</p>
          <input
            type="text"
            id="titleInput"
            value={titleInput}
            onChange={handleTitleValue}
            placeholder="Ex: Implementar autenticação"
            className="border rounded-lg px-4 py-2"
          />
        </label>
        <label htmlFor="descriptionInput">
          <p>Descrição</p>
          <input
            type="text"
            id="descriptionInput"
            value={descriptionInput}
            onChange={handleDescriptionValue}
            placeholder="Detalhes opcionais..."
            className="border rounded-lg px-4 py-2"
          />
        </label>
        <section>
          <header>Prioridade.</header>
          <div className="flex gap-2">
            {priorities.map((prio) => (
              <button
                key={prio}
                className={`border rounded-xl cursor-pointer px-4 ${prio === priority && "border-2"}`}
                onClick={() => handlePriorityTask(prio)}
                type="button"
              >
                {prioVariant[prio]}
              </button>
            ))}
          </div>
        </section>
        <footer className="flex gap-2">
          <button
            className="border rounded-lg cursor-pointer px-4"
            type="button"
            onClick={handleModal}
          >
            Cancelar
          </button>
          <button className="border rounded-lg cursor-pointer px-4">
            Adicionar
          </button>
        </footer>
      </form>
    </Modal>
  );
}
