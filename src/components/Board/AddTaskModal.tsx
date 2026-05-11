import Modal from "react-modal";
import type { Priority, Task } from "../../types/board";
import { useState } from "react";
import { useBoard } from "../../hook/useBoard";

type AddTaskModalProps = {
  modalState: boolean;
  handleModal: () => void;
};

type FormErrors = {
  title?: string;
};

export default function AddTaskModal({
  handleModal,
  modalState,
}: AddTaskModalProps) {
  const { addTask } = useBoard();

  const [titleInput, setTitleInput] = useState<string>("");

  const [descriptionInput, setDescriptionInput] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});

  const [priority, setPriority] = useState<Priority>("medium");

  const priorities: Priority[] = ["low", "medium", "high"];
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

  function handleTitleValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    formValidation(name, value);
    setTitleInput(value);
  }

  function handleDescriptionValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setDescriptionInput(value);
  }

  function handlePriorityTask(priority: Priority) {
    setPriority(priority);
  }

  function formValidation(name: string, value: string): boolean {
    let errorMessage = "";

    if (name === "title" && !value.trim()) {
      errorMessage = "Digite um título válido.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    return !errorMessage;
  }

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const isTitleValid = formValidation("title", titleInput);

    if (!isTitleValid) {
      return;
    }

    const newTask: Omit<Task, "id" | "column"> = {
      title: titleInput,
      description: descriptionInput,
      priority: priority,
    };

    setErrors({});
    addTask(newTask);
    setTitleInput("");
    setDescriptionInput("");
    setPriority("medium");
    handleModal();
  }

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={handleModal}
      contentLabel="Modal to add new task."
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex items-center justify-center w-screen"
      }
      className={
        "p-10 rounded-2xl bg-body w-80 md:w-100 border border-gray-50/20"
      }
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 items-center text-sm"
      >
        <header>
          <h1 className="text-base">Nova Tarefa</h1>
        </header>
        <label htmlFor="titleInput" className="w-full">
          <div>
            <p>Titulo *</p>
            {errors.title && (
              <p className="bg-red-600/20 text-red-600 px-4 my-1 rounded-sm h-fit text-[11px]">
                {errors.title}
              </p>
            )}
          </div>
          <input
            type="text"
            name="title"
            id="titleInput"
            value={titleInput}
            onChange={handleTitleValue}
            placeholder="Ex: Implementar autenticação"
            className="bg-card rounded-lg px-4 py-2 outline-0 w-full"
          />
        </label>
        <label htmlFor="descriptionInput" className="w-full">
          <p className="">Descrição</p>
          <textarea
            id="descriptionInput"
            value={descriptionInput}
            onChange={handleDescriptionValue}
            placeholder="Detalhes opcionais..."
            className="bg-card rounded-lg px-4 py-1 outline-0 w-full scrollbar-none"
            maxLength={100}
          />
          <span>{descriptionInput.length}/100</span>
        </label>
        <section>
          <header>Prioridade</header>
          <div className="flex gap-2">
            {priorities.map((prio) => (
              <button
                key={prio}
                className={`bg-card rounded-lg border-transparent cursor-pointer px-4 py-1 ${prio === priority && "underline"}  ${priorityBgVariant[prio]} hover:opacity-80`}
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
            className="underline rounded-lg cursor-pointer px-4 hover:opacity-80"
            onClick={handleModal}
          >
            Cancelar
          </button>
          <button className="bg-card rounded-lg cursor-pointer py-2 px-4 hover:opacity-80">
            Adicionar
          </button>
        </footer>
      </form>
    </Modal>
  );
}
