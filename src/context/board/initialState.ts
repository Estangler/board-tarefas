import type { State } from "../../types/board";

export const INITIAL_STATE: State = {
  tasks: [
    {
      id: 1,
      title: "Criar telas de login",
      description: "Layout e validação",
      priority: "high",
      column: "todo",
    },
    {
      id: 2,
      title: "Configurar roteamento",
      description: "React Router v6",
      priority: "medium",
      column: "doing",
    },
    {
      id: 3,
      title: "Setup do projeto",
      description: "Vite + TypeScript",
      priority: "low",
      column: "done",
    },
  ],
  nextId: 4,
};
