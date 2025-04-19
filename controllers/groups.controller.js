const { createViewPage } = require("../helpers/create.views.page.js");
const axios = require("axios");

const getGroups = async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users"); // Example API call
    const groups = response.data; 

    res.render(createViewPage("groups"), { title: "Groups", groups });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error fetching groups data" });
  }
};

module.exports = {
    getGroups
};
