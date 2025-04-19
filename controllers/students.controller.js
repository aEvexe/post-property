const { createViewPage } = require("../helpers/create.views.page.js");
const axios = require("axios");

const getStudents = async (req, res) => {
  try {
    const studentsData = await axios.get("https://jsonplaceholder.typicode.com/users");
    const students = studentsData.data;

    res.render(createViewPage("students"), { title: "Students", students });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error fetching students data" });
  }
};

module.exports = { getStudents };
