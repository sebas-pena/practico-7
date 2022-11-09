const { Schema, model } = require("mongoose")

const studentSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  },
  grade: {
    required: true,
    type: Number,
    enum: [4, 5, 6]
  },
  group: {
    required: true,
    type: String,
    enum: ["A", "B", "C"]
  },
  subjects: [{
    type: String
  }],
  orientation: {
    type: String,
    default: null,
    required: function () {
      return this.grade === 5 || this.grade === 6
    }
  }
}, {
  versionKey: false
})

const user = model("student", studentSchema)

module.exports = user