import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus, Check, Trash2 } from "lucide-react";
import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

export function ReduxTodo() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
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
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
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
                onClick={() => dispatch(toggleTodo(todo.id))}
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
                onClick={() => dispatch(deleteTodo(todo.id))}
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
