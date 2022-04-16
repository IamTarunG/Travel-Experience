const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/posts.js");
router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);
module.exports = router;
