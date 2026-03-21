import { Link } from "react-router-dom";

export default function GalleryCard({ post, isAdmin, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={post.media}
        alt={post.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {post.description}
        </p>

        <div className="flex justify-between mt-4 items-center ">
          <Link
            to={`/gallery/${post.id}`}
            className="group mt-6 mb-4 flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 hover:border-blue-100 transition-all duration-300"
          >
            View More →
          </Link>

          {isAdmin && (
            <div className="flex gap-2">
              <Link
                to={`/admin/edit/${post.id}`}
                className="text-blue-500 text-sm"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(post.id)}
                className="text-red-500 text-sm"
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