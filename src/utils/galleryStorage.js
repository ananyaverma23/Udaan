const STORAGE_KEY = "udaan_gallery";

const samplePosts = [
  {
    id: "1",
    title: "Advanced Fetal Scan",
    category: "Diagnostics",
    date: "2024-03-15",
    description: "High-resolution anomaly scan ensuring accurate fetal development monitoring.",
    // Changed to array to match GalleryDetail.jsx requirements
    media: [{ type: 'image', url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b" }],
  },
  {
    id: "2",
    title: "IVF Laboratory Setup",
    description:
      "State-of-the-art IVF lab with advanced fertility technologies.",
    category: "Clinical Case",
    date: "March 22, 2026",
    media: [{ type: "image", url: "https://images.unsplash.com/photo-1580281658629-74d4e0e9a3b5" }],
  },
  {
    id: "3",
    title: "Patient Consultation",
    description:
      "Expert consultation for personalized fertility treatment plans.",
    category: "Clinical Case",
    date: "March 22, 2026",
    media: [{ type: "image", url: "https://images.unsplash.com/photo-1600959907703-125ba1374a12"}],
  },
  {
    id: "5",
    title: "Embryo Freezing Process",
    description:
      "Secure and advanced cryopreservation techniques for embryos.",
    category: "Clinical Case",
    date: "March 22, 2026",
    media: [
      {type: "image", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" }],
  },
];

const normalizeMediaItem = (item) => {
  if (!item) return null;

  if (typeof item === "string") {
    return { url: item, type: "image" };
  }

  if (!item.url) return null;

  return {
    url: item.url,
    type: item.type || "image",
  };
};

export const normalizePost = (post = {}) => {
  const mediaSource = Array.isArray(post.media)
    ? post.media
    : post.media
      ? [post.media]
      : post.url
        ? [post.url]
        : [];

  const media = mediaSource.map(normalizeMediaItem).filter(Boolean);

  return {
    id: post.id || Date.now().toString(),
    title: post.title || "",
    description: post.description || "",
    category: post.category || "Clinical Case",
    date: post.date || new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    media,
  };
};

export const getPosts = () => {
  const storedPosts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

  if (!storedPosts || storedPosts.length === 0) {
    const normalizedSamples = samplePosts.map(normalizePost);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedSamples));
    return normalizedSamples;
  }

  const normalizedPosts = storedPosts.map(normalizePost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedPosts));
  return normalizedPosts;
};

export const savePosts = (posts) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(posts.map(normalizePost))
  );
};

export const createPost = (post) => {
  const posts = getPosts();
  const newPost = normalizePost({ ...post, id: Date.now().toString() });
  savePosts([newPost, ...posts]);
  return newPost;
};

export const updatePost = (id, updatedPost) => {
  const posts = getPosts().map((p) =>
    p.id === id ? normalizePost({ ...p, ...updatedPost, id }) : p
  );
  savePosts(posts);
};

export const deletePost = (id) => {
  const posts = getPosts().filter((p) => p.id !== id);
  savePosts(posts);
};

export const getPostById = (id) => {
  return getPosts().find((p) => p.id === id);
};

export const getPostCover = (post) => {
  return normalizePost(post).media[0] || null;
};
