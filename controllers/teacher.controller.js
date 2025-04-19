const axios = require("axios");
const { createViewPage } = require("../helpers/create.views.page.js");

const getTeacherss = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    const teachers = await userData.data;

    res.render(createViewPage("teachers"), { title: "Teachers", teachers });
  } catch (error) {
    console.log(error);
    res.send({ message: "UStoz malumotlarini yukalshda xatolik" });
  }
}

const getTeacherById = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${teacherId}`
    );
    res.render(createViewPage("teacher"), { title: "Teachers", teacher: data });
  } catch (error) {
    console.log(error);
  }
}

const getAddTeacher = (req, res) => {
  try {
    res.render(createViewPage("add-teacher"), {title: "Teachers",});
  } catch (error) {
    console.log(error)
    res.send({message: "Serverda hatolik"})
  }
}

const postAddTeacher = async (req, res) => {
  try {
    const {username, email, phone} = req.body;
    const userData = await axios.post("https://jsonplaceholder.typicode.com/users", {
      username,
      email,
      phone,
    })
    const teacher = userData.data
    res.render(createViewPage("teacher"), {title: 'Teacher', teacher})
  } catch (error) {
    console.log(error)
    res.send({message: "Serverda hatolik"})
  }
}

const deleteTeacherById = async (req, res) => {
  try {
    const {id} = req.params;
    const userData = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(userData);
    res.sendStatus(204);
  } catch (error) {
    console.log(error)
    res.send({message: "Serverda hatolik"})
  }
}

const getEditTeacherById = async (req, res) => {
   try {
    const {id} = req.params;
    const userData = await axios({
      method: "GET", 
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const teacher = userData.data;
    res.render(createViewPage("edit-teacher"), { title: "Teachers", teacher});
  } catch (error) {
    console.log(error)
    res.send({message: "Serverda hatolik"})
  }
};

const putEditTeacher = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, username, email, phone} = req.body;
    const userData = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,{
        name, 
        username, 
        email,
        phone,
      });
    const teacher = userData.data;
    res.render(createViewPage("teacher"), { title: "Teachers", teacher});
  } catch (error) {
    console.log(error)
    res.send({message: "Serverda hatolik"})
  }
}

module.exports = {
    getTeacherss,
    getTeacherById,
    getAddTeacher,
    postAddTeacher,
    deleteTeacherById,
    getEditTeacherById,
    putEditTeacher

}