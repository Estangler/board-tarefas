import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import "./index.css";
import App from "./App.tsx";
import BoardProvider from "./context/board/BoardProvider.tsx";

Modal.setAppElement("#root");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </StrictMode>,
);
