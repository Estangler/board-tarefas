import { useReducer } from "react";
import { INITIAL_STATE } from "./context/board/initialState";
import { boardReducer } from "./context/board/boardReducer";

export default function App() {
  const [state, dispatch] = useReducer(boardReducer, INITIAL_STATE);

  function handleDispatch() {
    dispatch({
      type: "MOVE_TASK",
      payload: { id: 2, currentColumn: "doing", direction: -1 },
    });

    console.log(state);
  }

  return <button onClick={handleDispatch}>CLICK</button>;
}
