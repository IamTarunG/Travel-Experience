const Post = require("../models/posts.js");
const mongoose = require("mongoose");
const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  try {
    const newPost = await new Post(post);
    newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    }
    await Post.findByIdAndRemove(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, tags, image } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = { title, message, tags, image, id };
    await Post.findByIdAndUpdate(id, updatedPost, { new: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getPosts, createPost, deletePost, updatePost };
