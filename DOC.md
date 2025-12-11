// ❌ DON'T USE SAGA - unless you have very complex requirements like:
// - Debouncing/throttling multiple actions
// - Complex async workflows with race conditions
// - WebSocket management
// - Background tasks

// ✅ USE REDUX THUNK - for:
// - Simple to moderate async operations
// - Custom async logic
// - When you need full control

// ✅✅ USE RTK QUERY - for:
// - API calls (GET, POST, PUT, DELETE)
// - Automatic caching
// - Data synchronization
// - Most real-world scenarios

RTK Query

    Built-in caching, deduping, expiration and invalidation (providesTags / invalidatesTags).
    Auto refetch on focus/reconnect, polling, and request lifecycle state.
    Auto-generated React hooks (useGetXQuery / useCreateYMutation).
    Much less boilerplate: no manual actions/reducers for server data.
    Good for CRUD endpoints and typical REST/GraphQL usage.

Thunks (createAsyncThunk)

    General-purpose side-effect/async tool; full control over dispatch sequence.
    Better for complex workflows, orchestrating multiple requests, conditional logic, or non-CRUD flows (auth flows, websockets, sequential steps).
    You must manually handle caching, invalidation and reducers if storing server data.

When to use which:

    Use RTK Query for fetching/storing remote resources and letting the library manage cache & re-fetch logic.
    Use createAsyncThunk when you need custom orchestration, transactions, or side effects that don’t fit the declarative query/mutation model.
    They can co-exist: RTK Query for most CRUD; thunks for complex domain logic.
