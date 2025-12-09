import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

export const thunkStore = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
