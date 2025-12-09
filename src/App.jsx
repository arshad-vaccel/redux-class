import { Provider } from "react-redux";
import { ListTodo } from "lucide-react";
import { BasicTodo } from "./examples/01-basic-state/BasicTodo";
import { TodoProvider } from "./examples/02-context/TodoContext";
import { ContextTodo } from "./examples/02-context/ContextTodo";
import { ReducerTodo } from "./examples/03-reducer/ReducerTodo";
import { PersistentTodo } from "./examples/04-persistent/PersistentTodo";
import { store } from "./examples/05-redux/store";
import { ReduxTodo } from "./examples/05-redux/ReduxTodo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ListTodo size={40} className="text-slate-700" />
            <h1 className="text-4xl font-bold text-slate-800">
              React State Management Examples
            </h1>
          </div>
          <p className="text-slate-600 text-lg">
            A progressive learning path from basic useState to Redux Toolkit
          </p>
        </div>

        {/* Example Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
          {/* 01 - Basic State */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  01
                </span>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Basic State
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Simple local state with useState hook
              </p>
            </div>
            <BasicTodo />
          </div>

          {/* 02 - Context */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  02
                </span>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Context API
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Share state across components with Context
              </p>
            </div>
            <TodoProvider>
              <ContextTodo />
            </TodoProvider>
          </div>

          {/* 03 - Reducer */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-500">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                  03
                </span>
                <h2 className="text-2xl font-semibold text-slate-800">
                  useReducer
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Predictable state updates with reducer pattern
              </p>
            </div>
            <ReducerTodo />
          </div>

          {/* 04 - Persistent */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                  04
                </span>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Persistent State
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                State that survives page refresh with localStorage
              </p>
            </div>
            <PersistentTodo />
          </div>

          {/* 05 - Redux */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">
                  05
                </span>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Redux Toolkit
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Centralized state management with Redux
              </p>
            </div>
            <Provider store={store}>
              <ReduxTodo />
            </Provider>
          </div>
        </div>

        {/* Learning Path Guide */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            📚 Progressive Learning Path
          </h3>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">
                01. Basic State
              </h4>
              <ul className="space-y-1 text-slate-600">
                <li>• useState hook</li>
                <li>• Local component state</li>
                <li>• Event handlers</li>
                <li>• State updates</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">
                02. Context API
              </h4>
              <ul className="space-y-1 text-slate-600">
                <li>• createContext</li>
                <li>• Provider pattern</li>
                <li>• Custom hooks</li>
                <li>• Prop drilling solution</li>
              </ul>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold text-emerald-700 mb-2">
                03. useReducer
              </h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Reducer function</li>
                <li>• Action types</li>
                <li>• Dispatch actions</li>
                <li>• Predictable updates</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-700 mb-2">
                04. Persistent
              </h4>
              <ul className="space-y-1 text-slate-600">
                <li>• localStorage API</li>
                <li>• useEffect for sync</li>
                <li>• Data persistence</li>
                <li>• Error handling</li>
              </ul>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h4 className="font-semibold text-pink-700 mb-2">
                05. Redux Toolkit
              </h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Redux slices</li>
                <li>• configureStore</li>
                <li>• useSelector hook</li>
                <li>• useDispatch hook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
