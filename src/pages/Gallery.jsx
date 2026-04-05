import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPosts } from "../utils/galleryStorage";
import { getStorageItem, removeStorageItem } from "../utils/storage";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState(() => getStorageItem("role"));
  const navigate = useNavigate();
  const location = useLocation();
  const posts = useMemo(() => {
    if (!location.key) return getPosts();
    return getPosts();
  }, [location.key]);

  const isAdmin = role === "admin";

  const handleLogout = () => {
    removeStorageItem("role");
    setRole(null);
    navigate("/gallery");
  };

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F7F4] to-[#FBF6F6] p-6">
      <div className="mb-6 flex items-center flex-col md:flex-row justify-between">
        <h1 className="text-3xl font-bold font-['Quicksand'] tracking-wide mb-6">
          Gallery
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            placeholder="Search..."
            className="rounded-lg border px-4 py-2 shadow-sm font-['Quicksand']"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div>
            {isAdmin && (
            <Link
              to="/admin/create"
              className="rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#1E293B] px-4 py-2.5 text-white m-2 font-['Quicksand']"
            >
              Create
            </Link>
          )}

          {!isAdmin ? (
            <button
              onClick={() => navigate("/admin")}
              className="rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#1E293B] px-4 py-2.5 text-white m-2 font-['Quicksand']"
            >
              Staff Only
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#1E293B] px-4 py-2.5 text-white m-2 font-['Quicksand']"
            >
              Logout
            </button>
          )}
          </div>          
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/gallery/${post.id}`)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur-lg transition hover:shadow-xl"
          >
            {post.media?.length > 0 && (
              <div className="overflow-hidden">
                <img
                  src={post.media[0].url}
                  alt={post.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold font-['Quicksand'] tracking-wide">{post.title}</h2>
              <p className="text-sm text-gray-500 font-['Quicksand']">{post.category}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-gray-500 font-['Quicksand'] tracking-wide">No posts found!</p>
      )}
    </div>
  );
}



