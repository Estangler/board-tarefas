import { useBoard } from "../../hook/useBoard";

export default function ProgressBar() {
  const { progress, total, doneCount } = useBoard();
  const prx = Math.floor(progress);
  return (
    <div className="flex gap-2 items-center my-2 text-sm">
      <div className="w-full h-3 rounded-sm border border-body-secondary/20 overflow-hidden flex items-center">
        <div
          className={`h-2 rounded-sm bg-body-secondary/50`}
          style={{ width: `${prx}%` }}
        />
      </div>
      <div>
        <span>{doneCount}</span>/<span>{total}</span>
      </div>
    </div>
  );
}
