import { useState } from "react";

export default function GalleryForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [media, setMedia] = useState(initialData.media || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, media });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-3 rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full border p-3 rounded-lg"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        className="w-full border p-3 rounded-lg"
        value={media}
        onChange={(e) => setMedia(e.target.value)}
        required
      />

      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
        Submit
      </button>
    </form>
  );
}