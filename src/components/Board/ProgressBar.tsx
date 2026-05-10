import { useBoard } from "../../hook/useBoard";

export default function ProgressBar() {
  const { progress } = useBoard();
  return (
    <div className="w-full h-4 bg-gray-950 rounded-full mt-20">
      <div
        className={`h-4 rounded-full bg-blue-500`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
