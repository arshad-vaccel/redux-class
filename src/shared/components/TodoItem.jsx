import { Check, Trash2 } from "lucide-react";

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
          todo.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 hover:border-green-500"
        }`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
