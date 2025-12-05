import { TodoProvider } from './components/SimpleContextTodo/TodoContext';
import { SimpleContextTodo } from './components/SimpleContextTodo/SimpleContextTodo';
import { ReducerTodo } from './components/ReducerTodo/ReducerTodo';
import { PersistentTodo } from './components/PersistentTodo/PersistentTodo';
import { ListTodo } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ListTodo size={40} className="text-slate-700" />
            <h1 className="text-4xl font-bold text-slate-800">
              React Todo Examples
            </h1>
          </div>
          <p className="text-slate-600 text-lg">
            Three different implementations: useContext, useReducer, and Persistent with Supabase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                useContext
              </h2>
              <p className="text-sm text-slate-600">
                Simple state management using React Context API
              </p>
            </div>
            <TodoProvider>
              <SimpleContextTodo />
            </TodoProvider>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-500">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                useReducer
              </h2>
              <p className="text-sm text-slate-600">
                Predictable state updates with reducer pattern
              </p>
            </div>
            <ReducerTodo />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Persistent
              </h2>
              <p className="text-sm text-slate-600">
                Data persistence with localStorage
              </p>
            </div>
            <PersistentTodo />
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Implementation Details
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">useContext</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Context Provider wrapper</li>
                <li>• Custom useTodos hook</li>
                <li>• Local state management</li>
                <li>• No persistence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-600 mb-2">useReducer</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Action-based updates</li>
                <li>• Pure reducer function</li>
                <li>• Predictable state changes</li>
                <li>• No persistence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">Persistent</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• localStorage API</li>
                <li>• Automatic sync</li>
                <li>• Data persists on refresh</li>
                <li>• Synchronous operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
