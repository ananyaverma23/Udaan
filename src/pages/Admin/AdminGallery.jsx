import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../utils/galleryStorage";
import GalleryCard from "../../components/GalleryCard";
import { Link } from "react-router-dom";

export default function AdminGallery() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    setPosts(getPosts());
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    loadPosts();
  };

  return (
    <div className="px-6 md:px-16 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700">
          Admin Gallery
        </h1>

        <Link
          to="/admin/create"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          + New Post
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <GalleryCard
            key={post.id}
            post={post}
            isAdmin
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}