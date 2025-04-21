const axios = require("axios");
const { createViewPage } = require("../helpers/create.views.page.js");


const getPosts = async (req, res) => {
  try {
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.render(createViewPage("posts"), { title: "Posts", posts });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postlarni yuklashda xatolik yuz berdi" });
  }
};

const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    res.render(createViewPage("post"), { title: "Post Detail", post });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni yuklashda xatolik yuz berdi" });
  }
};


const getAddPost = (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Add Post" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Formani yuklashda xatolik yuz berdi" });
  }
};


const postAddPost = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const { data: post } = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId,
    });
    res.render(createViewPage("post"), { title: "Post Created", post });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni qo'shishda xatolik yuz berdi" });
  }
};


const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni o'chirishda xatolik yuz berdi" });
  }
};


const getEditPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.render(createViewPage("edit-post"), { title: "Edit Post", post });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni tahrirlash sahifasini yuklashda xatolik yuz berdi" });
  }
};


const putEditPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const { data: post } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body,
    });
    res.render(createViewPage("post"), { title: "Post Updated", post });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni tahrirlashda xatolik yuz berdi" });
  }
};

module.exports = {
  getPosts,
  getPostById,
  getAddPost,
  postAddPost,
  deletePostById,
  getEditPostById,
  putEditPost,
};
