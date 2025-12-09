import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://jsonplaceholder.typicode.com";

// const fetchPosts = async()=>{
//   const res = await axios.get(`${API_BASE}/posts?_limit=10`);
//   return res.data;
// }
// const [posts, setPosts] = useState([]);

// useEffect(() => {
//   fetchPosts().then(data => setPosts(data)
// }, []);

// Async thunks using real JSONPlaceholder API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(`${API_BASE}/posts?_limit=10`);
  const posts = await response.json();
  return posts;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    const response = await fetch(`${API_BASE}/posts`, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newPost = await response.json();
    return newPost;
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await fetch(`${API_BASE}/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const updatedPost = await response.json();
  return updatedPost;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    await fetch(`${API_BASE}/posts/${postId}`, {
      method: "DELETE",
    });
    return postId;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create post
      .addCase(createPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // Update post
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      // Delete post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = state.data.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
