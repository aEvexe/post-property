const router = require("express").Router();
const teacherRoute = require("./teacher.routes.js");
const studentRoute = require("./students.routes.js");
const groupRoute = require("./groups.routes.js");
const aboutRoute = require("./about.routes.js");
const postRoute = require("./posts.routes.js")

router.use(teacherRoute);
router.use(studentRoute);
router.use(groupRoute);
router.use(aboutRoute);
router.use(postRoute)

module.exports = router