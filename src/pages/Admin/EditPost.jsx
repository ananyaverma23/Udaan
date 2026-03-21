import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../../utils/galleryStorage";
import GalleryForm from "../../components/GalleryForm";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = getPostById(id);

  const handleUpdate = (data) => {
    updatePost(id, data);
    navigate("/admin/gallery");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">
        Edit Post
      </h2>

      <GalleryForm onSubmit={handleUpdate} initialData={post} />
    </div>
  );
}