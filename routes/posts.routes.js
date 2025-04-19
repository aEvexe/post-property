const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  getAddPost,
  postAddPost,
  deletePostById,
  getEditPostById,
  putEditPost,
} = require('../controllers/post.controller');

router.get("/posts", getPosts);
router.get("/add-post", getAddPost);
router.post("/add-post", postAddPost);
router.get("/:postId", getPostById);
router.get("/edit-post/:id", getEditPostById);
router.post("/edit-post/:id", putEditPost);
router.delete("/:id", deletePostById);

module.exports = router;

