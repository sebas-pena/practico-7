const { createTeacher, teacherLogin } = require("../controllers/teacher.controller")
const validateProps = require("../middlewares/validators/validateProps")
const router = require("express").Router()


router.post("/crear-cuenta", validateProps("username", "password"), createTeacher)
router.post("/iniciar-sesion", validateProps("username", "password"), teacherLogin)
module.exports = router