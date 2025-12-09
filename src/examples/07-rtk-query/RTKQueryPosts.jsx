import { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./postsApi";
import { Loader2, Plus, Pencil, Trash2, RefreshCw, User } from "lucide-react";

export function RTKQueryPosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);

  // RTK Query hooks
  const { data: posts, isLoading, isFetching, refetch } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    try {
      if (editingId) {
        await updatePost({ id: editingId, title, body, userId: 1 }).unwrap();
        setEditingId(null);
      } else {
        await createPost({ title, body, userId: 1 }).unwrap();
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Failed to save post:", error);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id).unwrap();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setBody("");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
        <span className="ml-2 text-slate-600">Loading posts...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title..."
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post content..."
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isCreating || isUpdating}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isCreating || isUpdating ? (
              <Loader2 className="animate-spin" size={18} />
            ) : editingId ? (
              <Pencil size={18} />
            ) : (
              <Plus size={18} />
            )}
            {editingId ? "Update Post" : "Create Post"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-500"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50"
          >
            <RefreshCw size={18} className={isFetching ? "animate-spin" : ""} />
          </button>
        </div>
      </form>

      {/* Posts List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {!posts || posts.length === 0 ? (
          <p className="text-center text-slate-500 py-4">
            No posts yet. Create your first post!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{post.title}</h3>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                    {post.body}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                    <User size={12} />
                    <span>User {post.userId}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="text-sm text-slate-500 text-center pt-2">
        {posts?.length || 0} post{posts?.length !== 1 ? "s" : ""} from
        JSONPlaceholder API
        {isFetching && (
          <span className="ml-2 text-indigo-600">• Refreshing...</span>
        )}
      </div>
    </div>
  );
}
