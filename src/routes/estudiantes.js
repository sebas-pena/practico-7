const { getStudents, createStudents, updateStudent } = require("../controllers/students.controller")
const validateStudents = require("../middlewares/validators/validateStudents")
const router = require("express").Router()


router.get("/grado/:grade", getStudents.byGrade)
router.get("/edad/mayor-de-edad", getStudents.adults)
router.get("/asignatura/:subject/:grade", getStudents.bySubjectAndGrade)
router.get("/orientacion/:orientation", getStudents.byOrientation)
router.post("/", validateStudents(true), createStudents)
router.patch("/:id", validateStudents(false), updateStudent)
module.exports = router