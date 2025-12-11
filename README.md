# React State Management Examples

A comprehensive learning path demonstrating **7 different approaches** to state management in React, from basic useState to advanced Redux patterns with real-world API integration.

## 📚 What You'll Learn

This project provides hands-on examples of:

1. **Basic State** - Understanding `useState` hook fundamentals
2. **Context API** - Sharing state across components without prop drilling
3. **useReducer** - Managing complex state with predictable updates
4. **Persistent State** - Maintaining state across page refreshes with localStorage
5. **Redux Toolkit** - Enterprise-level state management with Redux
6. **Redux Thunk** - Async operations and API integration with Redux middleware
7. **RTK Query** - Modern data fetching with automatic caching and state management

## 🎯 Who Is This For?

- **Students** learning React state management patterns
- **Teachers** looking for a structured curriculum
- **Developers** wanting to compare different state management approaches

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── examples/
│   ├── 01-basic-state/
│   │   └── BasicTodo.jsx          # useState fundamentals
│   ├── 02-context/
│   │   ├── TodoContext.jsx        # Context setup
│   │   └── ContextTodo.jsx        # Context consumer
│   ├── 03-reducer/
│   │   ├── todoReducer.js         # Reducer function
│   │   └── ReducerTodo.jsx        # useReducer hook
│   ├── 04-persistent/
│   │   └── PersistentTodo.jsx     # localStorage integration
│   ├── 05-redux/
│   │   ├── store.js               # Redux store config
│   │   ├── todoSlice.js           # Redux slice
│   │   └── ReduxTodo.jsx          # Redux with hooks
│   ├── 06-redux-thunk/
│   │   ├── store.js               # Thunk store config
│   │   ├── postsSlice.js          # Async thunks & reducers
│   │   └── ThunkPosts.jsx         # Posts with API calls
│   └── 07-rtk-query/
│       ├── store.js               # RTK Query store
│       ├── postsApi.js            # API endpoints definition
│       └── RTKQueryPosts.jsx      # Posts with RTK Query
├── pages/
│   ├── HomePage.jsx               # Main page with all examples
│   ├── ThunkPage.jsx              # Dedicated Redux Thunk page
│   └── RTKQueryPage.jsx           # Dedicated RTK Query page
├── shared/
│   └── components/
│       ├── TodoItem.jsx           # Reusable todo item
│       └── TodoInput.jsx          # Reusable input form
├── App.jsx                        # Router setup
└── main.jsx
```

## 💡 Learning Path

### Level 1: Basic State (Purple)

- Learn the `useState` hook
- Understand local component state
- Practice event handling and state updates

### Level 2: Context API (Blue)

- Solve prop drilling with Context
- Create custom hooks for consuming context
- Understand Provider pattern

### Level 3: useReducer (Emerald)

- Implement reducer functions
- Define action types and dispatch
- Manage predictable state transitions

### Level 4: Persistent State (Orange)

- Integrate localStorage API
- Sync state with useEffect
- Handle data persistence errors

### Level 5: Redux Toolkit (Pink)

- Configure Redux store
- Create slices with reducers
- Use `useSelector` and `useDispatch` hooks

### Level 6: Redux Thunk (Green) 🌐

**[Dedicated Page: `/redux-thunk`]**

- Async operations with `createAsyncThunk`
- Real API integration with JSONPlaceholder
- Handle loading states (pending/fulfilled/rejected)
- Error handling and retry logic
- Full CRUD operations (Create, Read, Update, Delete)

### Level 7: RTK Query (Indigo) 🚀

**[Dedicated Page: `/rtk-query`]**

- Modern data fetching with `createApi`
- Automatic caching and refetching
- Query and Mutation hooks
- Tag-based cache invalidation
- Minimal boilerplate, maximum power

## 🌐 API Integration

## 🛠️ Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **JSONPlaceholder** - Fake REST API for demos

## 🚦 Navigation

- **`/`** - Home page with examples 1-5 and links to 6-7
- **`/redux-thunk`** - Dedicated page for Redux Thunk example
- **`/rtk-query`** - Dedicated page for RTK Query examplee management
- ✅ Full control over API calls

### RTK Query Features:

- ✅ Automatic request deduplication
- ✅ Built-in caching strategies
- ✅ Optimistic updates
- ✅ Polling and refetching
- ✅ Generated React hooks

## 🔑 Key Concepts

Each example builds upon the previous one, introducing new concepts:

| Example          | State Location   | Sharing Method | Complexity | API Integration | Caching      |
| ---------------- | ---------------- | -------------- | ---------- | --------------- | ------------ |
| 01 - Basic       | Component        | Props          | Low        | No              | No           |
| 02 - Context     | Context Provider | useContext     | Medium     | No              | No           |
| 03 - Reducer     | Component        | Props          | Medium     | No              | No           |
| 04 - Persistent  | Component        | Props          | Medium     | No              | localStorage |
| 05 - Redux       | Global Store     | useSelector    | High       | No              | Optional     |
| 06 - Redux Thunk | Global Store     | useSelector    | High       | ✅ Yes          | Manual       |
| 07 - RTK Query   | Global Store     | useQuery hooks | Medium     | ✅ Yes          | ✅ Automatic |

## 📖 Teaching Tips

1. Start with example 01 and work sequentially
2. Each example is color-coded for easy reference
3. Examples 1-5 use todos for consistency, 6-7 use posts for API realism
4. Code is intentionally clear to highlight state management patterns
5. Compare implementations side-by-side in the UI
6. Examples 6-7 have dedicated pages for focused learning

## 🎨 Color Coding

- 🟣 Purple - Basic useState
- 🔵 Blue - Context API
- 🟢 Green - useReducer / Redux Thunk
- 🟠 Orange - Persistent State
- 🩷 Pink - Redux Toolkit
- 🟢 Green - Redux Thunk (with API)
- 🟣 Indigo - RTK Query (with API)simple to highlight the state management pattern

5. Compare implementations side-by-side in the UI

## 🎨 Color Coding

- 🟣 Purple - Basic useState
- 🔵 Blue - Context API
- 🟢 Green - useReducer
- 🟠 Orange - Persistent
- 🩷 Pink - Redux Toolkit

## 📝 License

MIT - Feel free to use for teaching and learning!
