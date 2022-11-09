const mongoose = require("mongoose")

const dbConnection = () => {
  const DB_URI = 'mongodb://127.0.0.1:27017/liceo'
  return mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
}


module.exports = dbConnection