const { createViewPage } = require("../helpers/create.views.page.js");
const axios = require("axios");

const getAbout = async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users"); // Example API call
    const groups = response.data; 

    res.render(createViewPage("about"), { title: "About", groups });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error fetching groups data" });
  }
};

module.exports = {getAbout}