const handleThrowHttpError = require("../../utils/handleThrowHttpError")

const validateProps = (...props) => (req, res, next) => {
  try {
    const parsedBody = {}
    const { body } = req
    const errors = []
    props.forEach(prop => {
      if (body[prop]) {
        parsedBody[prop] = body[prop]
      } else {
        errors.push(`Field ${prop} is required.`)
      }
    })
    if (!errors.length) {
      req.body = parsedBody
      next()
    } else {
      handleThrowHttpError(req, res, 400, "Missing props.", errors)
    }
  } catch (e) {
    handleThrowHttpError(req, res, 500, "Internal server error.")
  }
}

module.exports = validateProps