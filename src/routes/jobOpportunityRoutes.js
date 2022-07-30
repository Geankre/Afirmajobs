const controller = require("../controllers/jobOpportunityController")
const express = require("express")
const router = express.Router()

const checkAuth = require("../middlewares/auth")

router.post("/create", checkAuth, controller.createJobOpportunity)

router.get("/all", checkAuth, controller.getAllJob)

router.get("/by_position_company", checkAuth, controller.getJobPositionAndCompany)

router.get("/filter", checkAuth, controller.getJobFilter)

router.put("/update_job_opportunity/:id", checkAuth, controller.updateJobOpportunity)

router.delete("/delete_job_opportunity/:id", checkAuth, controller.deleteJobOpportunity)



module.exports = router