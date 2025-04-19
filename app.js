const express = require("express");
const path = require("node:path");
require("dotenv").config();
const morgan = require("morgan");
const axios = require("axios");
const methodOverride = require("method-override");
const { createViewPage } = require("./helpers/create.views.page.js");
const indexRoad = require("./routes/index.routes.js")


const PORT = process.env.PORT || 3333;

const app = express(); // ** server yaratish
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(morgan("short"));

app.use(express.static("styles"));
app.use(express.static("images"));

app.use(indexRoad);
app.use("/posts", require("./routes/posts.routes"));


app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main" });
});


app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

