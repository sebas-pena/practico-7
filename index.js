const server = require("./src/app")
const dbConnection = require("./src/db/mongo")



dbConnection().then(() => {
  console.log("*** DATABASE CONNECTED ***")
  const port = server.get("port")
  server.listen(port, () => console.log(`*** SERVER LISTENING ON PORT ${port} ***`))
}).catch(e => {
  console.log(error)
  process.exit(1)
})