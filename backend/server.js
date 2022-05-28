const express = require("express")
const bodyparser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")

// const routes = require('./Routes/drinkSubmit')
const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server is listening on ${port}`))
