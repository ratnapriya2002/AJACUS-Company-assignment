export function Toast({ message, type = "info", onClose }) {
  if (!message) return null;
  const color = type === "error" ? "bg-red-500" : "bg-green-500";
  return (
    <div
      className={`fixed top-4 right-4 ${color} text-white px-4 py-2 rounded shadow`}
    >
      <div className="flex items-center gap-2">
        <div>{message}</div>
        <button onClick={onClose} className="opacity-80">
          ✕
        </button>
      </div>
    </div>
  );
}
