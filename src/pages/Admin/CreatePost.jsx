import { useState, useEffect } from "react";
import { createPost } from "../../utils/galleryStorage";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role !== "admin") navigate("/gallery");
  }, []);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    media: [],
  });

  const [preview, setPreview] = useState("");

  // 🔹 Handle image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      setForm({
        ...form,
        media: [{ url: base64, type: "image" }],
      });

      setPreview(base64);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.title) {
      alert("Title is required");
      return;
    }

    createPost(form);
    navigate("/gallery");
  };

  return (
    <div className="admin-page min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE9E9] via-white to-[#FBF6F6] px-4">
      
      {/* Card */}
      <div className="w-full max-w-screen bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-8 m-8">

        {/* Back */}
        <button
          onClick={() => navigate("/gallery")}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back to Gallery
        </button>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#1E293B] bg-clip-text text-transparent">
            Create New Post
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add content to gallery
          </p>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            placeholder="Write description..."
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
            placeholder="e.g. Clinical Case"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Upload Image (optional)</label>

          <input
            type="file"
            accept="image/*"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
        </div>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
          />
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#1E293B] text-white py-2 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Create Post
        </button>
      </div>
    </div>
  );
}



