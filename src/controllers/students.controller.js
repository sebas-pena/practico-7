const students = require("../models/student")
const handleThrowHttpError = require("../utils/handleThrowHttpError")

const getStudents = {

  byGrade: async (req, res) => {
    try {
      const { grade } = req.params
      const result = await students.find({ grade }, { group: 1, name: 1, age: 1 })
      res.status(200).send(result)
    } catch (e) {
      handleThrowHttpError(req, res, 500, "Internal server error.")
    }
  },

  byOrientation: async (req, res) => {
    try {
      const { orientation } = req.params
      const result = await students.find({ orientation }, { orientation: 0, age: 0 })
      res.status(200).send(result)

    } catch (e) {
      handleThrowHttpError(req, res, 500, "Internal server error.")
    }
  },

  adults: async (req, res) => {
    try {
      const result = await students.find({ age: { $gte: 18 } }, { name: 1, grade: 1, group: 1 }).sort({ name: "asc" })
      res.status(200).send(result)
    } catch (e) {
      handleThrowHttpError(req, res, 500, "Internal server error.")
    }
  },

  bySubjectAndGrade: async (req, res) => {
    try {
      const { subject, grade } = req.params
      const result = await students.find({ subjects: subject, grade })
      res.status(200).send(result)
    } catch (e) {
      handleThrowHttpError(req, res, 500, "Internal server error.")
    }
  },

  all: async (req, res) => {
    try {
      const result = await students.find()
      res.status(200).send(result)
    } catch (e) {
      handleThrowHttpError(req, res, 500, "Internal server error.")
    }
  }

}

const createStudents = async (req, res) => {
  try {
    const { body } = req
    students.create(body)
      .then((students) => {
        res.status(201).send(students)
      })
      .catch(e => {
        handleThrowHttpError(req, res, 500, "Internal server error.")
      })

  } catch (e) {
    handleThrowHttpError(req, res, 500, "Internal server error.")
  }
}

const updateStudent = (req, res) => {
  try {
    const { body } = req
    const { id } = req.params
    students.findByIdAndUpdate(id, { $set: body }, { new: true })
      .then(result =>
        res.status(200).send(result)
      )
      .catch(e => {
        handleThrowHttpError(req, res, 500, "Invalid Values.")
      })
  } catch (e) {
    handleThrowHttpError(req, res, 500, "Internal server error.")
  }
}

module.exports = {
  getStudents,
  createStudents,
  updateStudent
}