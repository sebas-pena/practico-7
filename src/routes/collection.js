const { getStudents } = require("../controllers/students.controller")
const students = require("../models/student")
const router = require("express").Router()

router.get("/", getStudents.all)
router.delete("/", async (req, res) => {
  try {
    students.deleteMany()
      .then(() => {
        console.log("*** COLLECTION CLEANED ***")
        res.status(200).send("OK")
      })
      .catch(e => {
        console.log(e)
        res.status(500).send(":C")
      })
  } catch (e) {
    console.log(e)
  }
})


module.exports = router