import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { thunkStore } from "../examples/06-redux-thunk/store";
import { ThunkPosts } from "../examples/06-redux-thunk/ThunkPosts";

export function ThunkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Examples
        </Link>

        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-green-500">
          <div className="mb-8">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-lg font-bold text-green-600 bg-green-100 px-3 py-1 rounded">
                06
              </span>
              <h1 className="text-4xl font-bold text-slate-800">Redux Thunk</h1>
            </div>
            <p className="text-slate-600 text-lg mb-4">
              Async operations with Redux middleware using JSONPlaceholder API
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">
                Key Concepts:
              </h3>
              <ul className="space-y-1 text-sm text-green-700">
                <li>
                  • <strong>createAsyncThunk</strong> - Simplifies async action
                  creators
                </li>
                <li>
                  • <strong>Async operations</strong> - GET, POST, PUT, DELETE
                  with real API
                </li>
                <li>
                  • <strong>Loading states</strong> - pending, fulfilled,
                  rejected
                </li>
                <li>
                  • <strong>Error handling</strong> - Graceful failure
                  management
                </li>
                <li>
                  • <strong>extraReducers</strong> - Handle async action
                  lifecycle
                </li>
              </ul>
            </div>
          </div>

          <Provider store={thunkStore}>
            <ThunkPosts />
          </Provider>
        </div>
      </div>
    </div>
  );
}
