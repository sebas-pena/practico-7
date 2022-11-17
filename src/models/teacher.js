const { Schema, model } = require("mongoose")

const TeacherSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

module.exports = model("teacher", TeacherSchema)