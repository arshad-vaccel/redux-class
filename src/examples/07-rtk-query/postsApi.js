import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice using JSONPlaceholder - a free fake REST API
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // GET all posts (limited to 10 for demo)
    getPosts: builder.query({
      query: () => "/posts?_limit=10",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Post", id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    // GET single post by ID
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),

    // POST create new post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    // PUT update post (full update)
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),

    // PATCH update post (partial update)
    patchPost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),

    // DELETE post
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  usePatchPostMutation,
  useDeletePostMutation,
} = postsApi;

// Pattern: use[EndpointName][Query/Mutation]

// // For queries (GET requests):
// getPosts: builder.query({...})  → useGetPostsQuery
// getPost: builder.query({...})   → useGetPostQuery

// // For mutations (POST/PUT/PATCH/DELETE):
// createPost: builder.mutation({...}) → useCreatePostMutation
// updatePost: builder.mutation({...}) → useUpdatePostMutation
// patchPost: builder.mutation({...})  → usePatchPostMutation
// deletePost: builder.mutation({...}) → useDeletePostMutation

// use + [EndpointName with PascalCase] + Query

// endpoints: (builder) => ({
//   getUsers: builder.query({...})      // → useGetUsersQuery
//   getUserById: builder.query({...})   // → useGetUserByIdQuery
//   fetchProducts: builder.query({...}) // → useFetchProductsQuery

//   addUser: builder.mutation({...})    // → useAddUserMutation
//   removeUser: builder.mutation({...}) // → useRemoveUserMutation
//   editUser: builder.mutation({...})   // → useEditUserMutation
// })
