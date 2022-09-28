import axios from "axios";

const API = axios.create({ baseURL: "https://poststravel.onrender.com" });

export const getPost = () => API.get("/posts");
export const createPost = (formData) => API.post("/posts", formData);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`posts/${id}`, updatedPost);
