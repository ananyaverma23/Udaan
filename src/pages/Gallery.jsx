import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Lock, Trash2, Edit3, ExternalLink } from "lucide-react";
import Container from "../components/Container";

export default function Gallery() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage to ensure CRUD works
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("udaan_gallery") || "[]");
    setPosts(savedPosts);
  }, []);

  const handleAdminAuth = () => {
    if (!isAdmin) {
      const password = prompt("Enter Admin Code:");
      // Using the specific code mentioned in previous steps
      if (password === "udaan2026") {
        setIsAdmin(true);
      } else {
        alert("Incorrect Code");
      }
    } else {
      // If already logged in, clicking the plus takes you to the create page
      navigate("/gallery/create");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this post permanently?")) {
      const updated = posts.filter(p => p.id !== id);
      setPosts(updated);
      localStorage.setItem("udaan_gallery", JSON.stringify(updated));
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* HEADER SECTION */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-blue-900 leading-tight">Clinical Gallery</h1>
            <p className="text-slate-500 mt-2">UDAAN's medical milestones.</p>
          </div>

          {/* THIS IS THE ADMIN BUTTON */}
          <button 
            onClick={handleAdminAuth}
            className={`p-4 rounded-2xl shadow-lg transition-all duration-300 ${
              isAdmin 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white text-slate-300 hover:text-blue-600 border border-slate-100"
            }`}
            title={isAdmin ? "Add New Post" : "Admin Access"}
          >
            {isAdmin ? <Plus size={24} /> : <Lock size={20} />}
          </button>
        </div>

        {/* GALLERY GRID */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                <div className="h-48 bg-slate-200">
                  {post.url ? (
                    <img src={post.url} className="w-full h-full object-cover" alt={post.title} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">No Media</div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-4 text-slate-800">{post.title}</h3>
                  
                  <button 
                    onClick={() => navigate(`/gallery/${post.id}`)} 
                    className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
                  >
                    Read Full Story <ExternalLink size={16} />
                  </button>

                  {/* ADMIN ACTIONS - Visible only after Lock is clicked and password entered */}
                  {isAdmin && (
                    <div className="mt-6 pt-4 border-t border-slate-50 flex gap-4">
                      <button 
                        onClick={() => navigate(`/gallery/edit/${post.id}`)} 
                        className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 text-xs font-bold transition-colors"
                      >
                        <Edit3 size={14} /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(post.id)} 
                        className="flex items-center gap-1.5 text-slate-500 hover:text-red-600 text-xs font-bold transition-colors"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No gallery posts found. Click the lock icon to add one.</p>
          </div>
        )}
      </Container>
    </div>
  );
}