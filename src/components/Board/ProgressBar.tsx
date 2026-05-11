import { useBoard } from "../../hook/useBoard";

export default function ProgressBar() {
  const { progress, total, doneCount } = useBoard();
  const prx = Math.floor(progress);
  return (
    <div className="flex gap-2 items-center justify-center mt-2 pl-4 pr-2">
      <div className="w-full h-3 border-gray-50/20 bg-gray-800 rounded-full border-2 overflow-hidden">
        <div
          className={`h-3 rounded-full bg-orange-600`}
          style={{ width: `${prx}%` }}
        />
      </div>
      <div>
        <span>{doneCount}</span>/<span>{total}</span>
      </div>
    </div>
  );
}
