const bcryptjs = require("bcryptjs")

const hashPassword = async (password) => await bcryptjs.hash(password, 10)
const comparePasswords = async (password, hash) => await bcryptjs.compare(password, hash)

module.exports = {
  hashPassword,
  comparePasswords,
}