import { Plus } from "lucide-react";

export function TodoInput({
  value,
  onChange,
  onSubmit,
  placeholder,
  color = "blue",
}) {
  const colorStyles = {
    purple: "focus:ring-purple-500 bg-purple-500 hover:bg-purple-600",
    blue: "focus:ring-blue-500 bg-blue-500 hover:bg-blue-600",
    emerald: "focus:ring-emerald-500 bg-emerald-500 hover:bg-emerald-600",
    orange: "focus:ring-orange-500 bg-orange-500 hover:bg-orange-600",
    pink: "focus:ring-pink-500 bg-pink-500 hover:bg-pink-600",
  };

  const [focusClass, buttonClass] =
    colorStyles[color]?.split(" ") || colorStyles.blue.split(" ");

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Add a new todo..."}
        className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${focusClass}`}
      />
      <button
        type="submit"
        className={`px-4 py-2 text-white rounded-lg transition-colors flex items-center gap-2 ${buttonClass}`}
      >
        <Plus size={20} />
      </button>
    </form>
  );
}
