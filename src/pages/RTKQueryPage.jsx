import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { rtkQueryStore } from "../examples/07-rtk-query/store";
import { RTKQueryPosts } from "../examples/07-rtk-query/RTKQueryPosts";

export function RTKQueryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Examples
        </Link>

        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-indigo-500">
          <div className="mb-8">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-lg font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded">
                07
              </span>
              <h1 className="text-4xl font-bold text-slate-800">RTK Query</h1>
            </div>
            <p className="text-slate-600 text-lg mb-4">
              Full CRUD API with automatic caching using JSONPlaceholder API
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2">
                Key Concepts:
              </h3>
              <ul className="space-y-1 text-sm text-indigo-700">
                <li>
                  • <strong>createApi</strong> - Define API endpoints in one
                  place
                </li>
                <li>
                  • <strong>CRUD operations</strong> - GET, POST, PUT, PATCH,
                  DELETE
                </li>
                <li>
                  • <strong>Auto caching</strong> - Automatic request
                  deduplication
                </li>
                <li>
                  • <strong>Invalidation tags</strong> - Smart cache
                  invalidation
                </li>
                <li>
                  • <strong>useQuery/useMutation</strong> - Powerful React hooks
                </li>
              </ul>
            </div>
          </div>

          <Provider store={rtkQueryStore}>
            <RTKQueryPosts />
          </Provider>
        </div>
      </div>
    </div>
  );
}
