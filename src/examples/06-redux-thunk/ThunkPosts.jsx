import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, createPost, updatePost, deletePost } from "./postsSlice";
import { Loader2, Pencil, Trash2, RefreshCw, User, Plus } from "lucide-react";

export function ThunkPosts() {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    if (editingId) {
      const post = posts.find((p) => p.id === editingId);
      await dispatch(updatePost({ ...post, title, body }));
      setEditingId(null);
    } else {
      await dispatch(createPost({ title, body, userId: 1 }));
    }

    setTitle("");
    setBody("");
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleRefresh = () => {
    dispatch(fetchPosts());
  };

  if (status === "loading" && posts.length === 0) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-green-600" size={32} />
        <span className="ml-2 text-slate-600">Loading posts...</span>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={handleRefresh}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Retry
        </button>
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
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post content..."
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
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
              onClick={() => {
                setEditingId(null);
                setTitle("");
                setBody("");
              }}
              className="px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-500"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={handleRefresh}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
            disabled={status === "loading"}
          >
            <RefreshCw
              size={18}
              className={status === "loading" ? "animate-spin" : ""}
            />
          </button>
        </div>
      </form>

      {/* Posts List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {posts.length === 0 ? (
          <p className="text-center text-slate-500 py-4">
            No posts yet. Create your first post!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4"
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
        {posts.length} post{posts.length !== 1 ? "s" : ""} from JSONPlaceholder
        API
        {status === "loading" && (
          <span className="ml-2 text-green-600">• Loading...</span>
        )}
      </div>
    </div>
  );
}
