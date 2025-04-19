const { default: axios} = require("axios")
const {createViewPage} = require("../helpers/create.views.page");
const { getTeacherss, getTeacherById, getAddTeacher, postAddTeacher, deleteTeacherById, getEditTeacherById, putEditTeacher } = require("../controllers/teacher.controller");

const router = require("express").Router();

router.get("/teachers", getTeacherss);
router.get("/teacher/:teacherId", getTeacherById);
router.get("/add-teacher", getAddTeacher);
router.post("/add-teacher", postAddTeacher);
router.delete("/teacher/:id", deleteTeacherById);
router.get("/edit-teacher/:id", getEditTeacherById);
router.put("/edit_teacher/:id", putEditTeacher)

module.exports = router;