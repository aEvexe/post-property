const axios = require("axios");
const { createViewPage } = require("../helpers/create.views.page.js");

// Get all comments
const getComments = async (req, res) => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/comments");
    const comments = response.data;
    res.render(createViewPage("comments"), { title: "Comments", comments });
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentlarni yuklashda xatolik" });
  }
};

// Get single comment by ID
const getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;
    const response = await axios(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const comment = response.data;
    res.render(createViewPage("comment"), { title: "Comment", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Komment topilmadi" });
  }
};

// Show add comment form
const getAddComment = (req, res) => {
  try {
    res.render(createViewPage("add-comment"), { title: "Add Comment" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda hatolik" });
  }
};

// Create a new comment
const postAddComment = async (req, res) => {
  try {
    const { name, email, body } = req.body;
    const response = await axios.post("https://jsonplaceholder.typicode.com/comments", {
      name,
      email,
      body,
    });
    const comment = response.data;
    res.render(createViewPage("comment"), { title: "Comment", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Komment qo'shishda xatolik" });
  }
};

// Show edit comment form
const getEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const comment = response.data;
    res.render(createViewPage("edit-comment"), { title: "Edit Comment", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni tahrirlashda xatolik" });
  }
};

// Update a comment
const putEditComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, body } = req.body;
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      name,
      email,
      body,
    });
    const comment = response.data;
    res.render(createViewPage("comment"), { title: "Comment", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni yangilashda xatolik" });
  }
};

// Delete a comment
const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni o'chirishda xatolik" });
  }
};

module.exports = {
  getComments,
  getCommentById,
  getAddComment,
  postAddComment,
  getEditCommentById,
  putEditComment,
  deleteCommentById,
};
