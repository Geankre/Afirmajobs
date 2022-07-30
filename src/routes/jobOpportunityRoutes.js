const controller = require("../controllers/jobOpportunityController")
const express = require("express")
const router = express.Router()

const checkAuth = require("../middlewares/auth")

router.post("/create", checkAuth, controller.createJobOpportunity)

router.get("/all", checkAuth, controller.getAllJob)

router.get("/byPositionCompany", checkAuth, controller.getJobPositionAndCompany)

router.get("/filter", checkAuth, controller.getJobFilter)

router.put("/updateJobOpportunity/:id", checkAuth, controller.updateJobOpportunity)

router.delete("/deleteJobOpportunity/:id", checkAuth, controller.deleteJobOpportunity)



module.exports = router