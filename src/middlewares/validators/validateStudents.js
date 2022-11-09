const handleThrowHttpError = require("../../utils/handleThrowHttpError")

const validateStudent = ({ age, name, orientation, grade, group, subjects }, strict) => {
  const errors = {}
  // Si es estricto, checkea que la existencia
  if (!age && strict) errors.age = "This field is required."
  if (!name && strict) errors.name = "This field is required."
  if (!grade && strict) errors.grade = "This field is required."
  if (!group && strict) errors.group = "This field is required."
  if (!subjects && strict) errors.subjects = "This field is required."
  // En caso de existir las propiedades, checkea los valores
  if (name && typeof name !== "string") errors.age = "Invalid value."
  if (age && typeof age !== "number") errors.age = "Invalid value."
  if (grade && (!grade == 4 || !grade == 5 || !grade == 6)) errors.grade = "Invalid value."
  if (group && !["A", "B", "C"].includes(group)) errors.group = "Invalid value."
  if (subjects && !Array.isArray(subjects)) errors.subjects = "This value should be of type array."
  else if (subjects && Array.isArray(subjects)) {
    subjects.forEach(subject => {
      if (typeof subject !== "string") errors.subjects = "The value should be an array of strings."
    })
  }

  if (grade && grade > 4 && !orientation) errors.orientation = "This field is required."
  else if (grade && grade == 4 && orientation) errors.orientation = "This field should be empty or null"

  return {
    isValid: !Object.keys(errors).length,
    errors
  }
}

const validateStudents = (strict) => (req, res, next) => {
  try {
    const { body } = req

    if (Array.isArray(body)) {
      const errors = []
      body.forEach((student, index) => {
        const result = validateStudent(student, strict)
        if (!result.isValid) errors.push({ index, errors: result.errors })
      })
      if (errors.length > 0) handleThrowHttpError(req, res, 400, "invalid request", errors)
      else next()
    } else {

      const result = validateStudent(body, strict)
      if (result.isValid) next()
      else handleThrowHttpError(req, res, 400, "invalid request", result.errors)
    }

  } catch (e) {
    console.log(e)
    handleThrowHttpError(req, res, 500, "invalid request")
  }
}


module.exports = validateStudents