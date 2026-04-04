import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../../utils/galleryStorage";
import { useState, useEffect } from "react";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role !== "admin") navigate(`/admin/${id}`);
  }, []);

  const existing = getPostById(id);

  const [form, setForm] = useState(existing);

  if (!form) return <p className="p-6">Post not found</p>;

  const handleUpdate = () => {
    updatePost(id, form);
    navigate(`/admin/${id}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE9E9] via-white to-[#FBF6F6] px-4">
      <div className="w-full max-w-screen bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-8 m-8">

        {/* Back */}
        <button
          onClick={() => navigate(`/admin/${post.id}`)}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#1E293B] bg-clip-text text-transparent">
            Edit Your Post
          </h1>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Title</label>
          <input
            value={form.title}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            value={form.description}
            rows={8}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Category</label>
          <input
            type="text"
            value={form.category}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />
        </div>

        <button
          onClick={handleUpdate}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#1E293B] text-white py-2 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Update
        </button>
      </div>
    </div>
  );
}



