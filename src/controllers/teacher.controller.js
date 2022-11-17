const teachers = require("../models/teacher")
const { hashPassword, comparePasswords } = require("../utils/handlePassword")
const handleThrowHttpError = require("../utils/handleThrowHttpError")

const createTeacher = async (req, res) => {
  try {
    let { username, password } = req.body
    password = await hashPassword(password)
    teachers.create({ username, password })
      .then(doc => res.status(201).json(doc))
      .catch(e =>
        handleThrowHttpError(req, res, 500, "Internal server error")
      )
  } catch (e) {
    handleThrowHttpError(req, res, 500, "Internal server error")
  }
}
const teacherLogin = async (req, res) => {
  try {
    let { username, password } = req.body
    const doc = await teachers.findOne({ username })
    if (doc) {
      const result = await comparePasswords(password, doc.password)
      if (result) {
        res.status(200).json({ id: doc._id, username: doc.username })
      } else {
        handleThrowHttpError(req, res, 401, "Unauthorized")
      }
    } else {
      handleThrowHttpError(req, res, 401, "Unauthorized")
    }
  } catch (e) {
    handleThrowHttpError(req, res, 500, "Internal server error")
  }
}

module.exports = {
  createTeacher,
  teacherLogin
}