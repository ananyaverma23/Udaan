import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../utils/galleryStorage";

export default function GalleryDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";

  useEffect(() => {
    setPost(getPostById(id));
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Delete this post?")) return;

    deletePost(id);
    navigate("/gallery");
  };

  if (!post) return <p className="admin-page p-6">Post not found</p>;

  return (
    <div className="admin-page min-h-screen bg-gradient-to-br from-[#F0F7F4] to-[#FBF6F6] p-6">
      <Link to="/gallery" className="mb-4 inline-block text-teal-600 font-medium font-quicksand">
        Back
      </Link>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white/80 shadow-lg backdrop-blur-lg">
        {post.media?.length > 0 && (
          <img
            src={post.media[0].url}
            alt={post.title}
            className="h-96 w-full object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="mt-2 text-gray-500">{post.category}</p>
          <p className="mt-4 text-gray-700">{post.description}</p>

          {isAdmin && (
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => navigate(`/admin/edit/${post.id}`)}
                className="text-sm text-teal-600"
              >
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



