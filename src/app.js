require("dotenv-safe").config()
const express = require("express")
const app = express()

const cors = require("cors")

const db = require("./config/database")

app.use(express.json())
app.use(cors())

const signUpRoutes = require("./routes/signUpRoutes")
const businessRoutes = require("./routes/businessRoutes")
const userRoutes = require("./routes/userRoutes")
const jobOpportunityRoutes = require("./routes/jobOpportunityRoutes")
const indexRoutes = require("./routes/indexRoutes")

app.use("/", indexRoutes)
app.use("/signUp", signUpRoutes)
app.use("/business", businessRoutes)
app.use("/user", userRoutes)
app.use("/job", jobOpportunityRoutes)

db.connect()

module.exports = app