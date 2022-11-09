const express = require("express")
const app = express()

// Middleware
app.use(express.json())
app.use("/api", require("./routes/"))

// Setting
app.set("port", 8080)

module.exports = app