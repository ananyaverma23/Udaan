// src/pages/ManagePost.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload, Save, X } from "lucide-react";
import Container from "../components/Container";

export default function ManagePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Clinical Case",
    media: [] // Changed from 'file' to 'media' array
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    const newMedia = selectedFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video') ? 'video' : 'image'
    }));

    setFormData(prev => ({
      ...prev,
      media: [...prev.media, ...newMedia]
    }));
  };

  const removeMedia = (index) => {
    setFormData(prev => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("udaan_gallery") || "[]");
    
    const postData = {
      ...formData,
      id: id || Date.now().toString(),
      date: new Date().toLocaleDateString(),
      // We store the URLs for local rendering
      media: formData.media.map(m => ({ url: m.url, type: m.type }))
    };

    const newPosts = id ? posts.map(p => p.id === id ? postData : p) : [postData, ...posts];
    localStorage.setItem("udaan_gallery", JSON.stringify(newPosts));
    navigate("/gallery");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <Container>
        <button onClick={() => navigate(-1)} className="group ml-4 mb-8 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:text-blue-600 transition-all">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back</span>
        </button>

        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10">
          <h1 className="text-3xl font-black text-slate-900 mb-8">{id ? "Edit Story" : "New Story"}</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full text-2xl font-bold border-b-2 border-slate-100 focus:border-blue-600 outline-none pb-2" placeholder="Post Heading" />

            {/* MULTI-MEDIA UPLOAD ZONE */}
            <div className="border-4 border-dashed border-slate-100 rounded-[2rem] p-8">
              <input type="file" id="multi-upload" hidden multiple onChange={handleFileChange} accept="image/*,video/*" />
              <label htmlFor="multi-upload" className="flex flex-col items-center cursor-pointer group">
                <Upload className="text-slate-200 group-hover:text-blue-500 mb-2" size={48} />
                <p className="text-slate-400 font-bold">Upload Photos or Videos</p>
              </label>

              {/* PREVIEW GRID */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {formData.media.map((item, index) => (
                  <div key={index} className="relative h-24 rounded-xl overflow-hidden bg-slate-100">
                    {item.type === 'video' ? (
                      <video src={item.url} className="w-full h-full object-cover" />
                    ) : (
                      <img src={item.url} className="w-full h-full object-cover" />
                    )}
                    <button onClick={() => removeMedia(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <textarea required value={formData.description} rows="5" onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full p-6 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe the treatment or achievement..." />

            <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
              Publish Story
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}