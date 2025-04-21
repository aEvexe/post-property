const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments.controller");

router.get("/comments", commentController.getComments);
router.get("/comments/:commentId", commentController.getCommentById);
router.get("/add-comment", commentController.getAddComment);
router.post("/add-comment", commentController.postAddComment);
router.get("/edit-comment/:id", commentController.getEditCommentById);
router.patch("/edit-comment/:id", commentController.putEditComment); 
router.delete("/comments/:id", commentController.deleteCommentById);

module.exports = router;
