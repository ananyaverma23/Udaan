const STORAGE_KEY = "udaan_gallery";

const samplePosts = [
  {
    id: "1",
    title: "Advanced Fetal Scan",
    description:
      "High-resolution anomaly scan ensuring accurate fetal development monitoring.",
    media:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
  },
  {
    id: "2",
    title: "IVF Laboratory Setup",
    description:
      "State-of-the-art IVF lab with advanced fertility technologies.",
    media:
      "https://images.unsplash.com/photo-1580281658629-74d4e0e9a3b5",
  },
  {
    id: "3",
    title: "Patient Consultation",
    description:
      "Expert consultation for personalized fertility treatment plans.",
    media:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
  },
  {
    id: "4",
    title: "Ultrasound Diagnostics",
    description:
      "Precision ultrasound imaging for accurate diagnosis and care.",
    media:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: "5",
    title: "Embryo Freezing Process",
    description:
      "Secure and advanced cryopreservation techniques for embryos.",
    media:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

// export const getPosts = () => {
//   return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// };

export const getPosts = () => {
  let posts = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!posts || posts.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePosts));
    return samplePosts;
  }

  return posts;
};

export const savePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const createPost = (post) => {
  const posts = getPosts();
  const newPost = { ...post, id: Date.now().toString() };
  savePosts([newPost, ...posts]);
};

export const updatePost = (id, updatedPost) => {
  const posts = getPosts().map((p) =>
    p.id === id ? { ...p, ...updatedPost } : p
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