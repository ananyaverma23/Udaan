import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Printer, Share2 } from "lucide-react";
import Container from "../components/Container";

export default function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("udaan_gallery") || "[]");
    const found = savedPosts.find(p => p.id === id);
    if (found) setPost(found);
  }, [id]);

  if (!post) return <div className="p-20 text-center font-bold text-slate-400">Loading story...</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      <Container>
        <div className="pt-8 mb-8 flex items-center justify-between print:hidden">
          <button onClick={() => navigate(-1)} className="group flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 font-bold hover:text-blue-600 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <div className="flex gap-2">
            <button onClick={() => window.print()} className="p-3 bg-slate-50 rounded-full text-slate-500 hover:bg-slate-900 hover:text-white transition-all">
              <Printer size={20} />
            </button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-6 leading-tight">{post.title}</h1>
            <p className="text-slate-400 flex items-center justify-center md:justify-start gap-2 font-medium">
              <Calendar size={16} /> {post.date}
            </p>
          </div>

          {/* RESPONSIVE MEDIA STACK */}
          <div className="space-y-6 mb-12">
            {post.media?.map((item, index) => (
              <div key={index} className="rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
                {item.type === 'video' ? (
                  <video src={item.url} controls className="w-full h-auto" />
                ) : (
                  <img src={item.url} className="w-full h-auto object-cover" alt="" />
                )}
              </div>
            ))}
          </div>

          <div className="prose prose-slate lg:prose-xl max-w-none">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">
              {post.description}
            </p>
          </div>
          
          <div className="mt-16 p-8 md:p-12 bg-blue-50 rounded-[2.5rem] text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Need Consultation?</h3>
            <p className="text-blue-700/60 mb-6 font-medium">Our clinical experts are available for personalized care.</p>
          </div>
        </article>
      </Container>
    </div>
  );
}