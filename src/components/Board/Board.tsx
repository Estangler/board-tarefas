import Column from "./Column";
import { COLUMNS } from "../../constants/columns";
export default function Board() {
  return (
    <main>
      {COLUMNS.map((col) => (
        <Column col={col} key={col} />
      ))}
      ;
    </main>
  );
}
