# React State Management Examples

A progressive learning path demonstrating five different approaches to state management in React, from basic useState to Redux Toolkit.

## 📚 What You'll Learn

This project provides hands-on examples of:

1. **Basic State** - Understanding `useState` hook fundamentals
2. **Context API** - Sharing state across components without prop drilling
3. **useReducer** - Managing complex state with predictable updates
4. **Persistent State** - Maintaining state across page refreshes with localStorage
5. **Redux Toolkit** - Enterprise-level state management with Redux

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
│   └── 05-redux/
│       ├── store.js               # Redux store config
│       ├── todoSlice.js           # Redux slice
│       └── ReduxTodo.jsx          # Redux with hooks
├── shared/
│   └── components/
│       ├── TodoItem.jsx           # Reusable todo item
│       └── TodoInput.jsx          # Reusable input form
├── App.jsx
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

### Level 3: useReducer (Green)

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

## 🔑 Key Concepts

Each example builds upon the previous one, introducing new concepts:

| Example         | State Location   | Sharing Method | Complexity | Persistence |
| --------------- | ---------------- | -------------- | ---------- | ----------- |
| 01 - Basic      | Component        | Props          | Low        | No          |
| 02 - Context    | Context Provider | useContext     | Medium     | No          |
| 03 - Reducer    | Component        | Props          | Medium     | No          |
| 04 - Persistent | Component        | Props          | Medium     | Yes         |
| 05 - Redux      | Global Store     | useSelector    | High       | Optional    |

## 🛠️ Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📖 Teaching Tips

1. Start with example 01 and work sequentially
2. Each example is color-coded for easy reference
3. All examples use the same todo app for consistency
4. Code is intentionally simple to highlight the state management pattern
5. Compare implementations side-by-side in the UI

## 🎨 Color Coding

- 🟣 Purple - Basic useState
- 🔵 Blue - Context API
- 🟢 Green - useReducer
- 🟠 Orange - Persistent
- 🩷 Pink - Redux Toolkit

## 📝 License

MIT - Feel free to use for teaching and learning!
