import { useReducer, useState, useEffect } from "react";
import { Plus, Check, Trash2 } from "lucide-react";

const STORAGE_KEY = "persistent_todos";

const loadState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error parsing stored todos:", error);
      return [];
    }
  }
  return [];
};

const saveState = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: crypto.randomUUID(),
          text: action.payload,
          completed: false,
        },
        ...state,
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export function PersistentTodo() {
  const [todos, dispatch] = useReducer(todoReducer, [], loadState);
  const [input, setInput] = useState("");

  useEffect(() => {
    saveState(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input.trim() });
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
        </button>
      </form>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No todos yet. Add one above!
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
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
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
                className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
