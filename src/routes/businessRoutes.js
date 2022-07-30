const controller = require("../controllers/businessController")
const express = require("express")
const router = express.Router()

const checkAuth = require("../middlewares/auth")

router.post("/profile", checkAuth, controller.createBusinessProfile)

router.get("/all", checkAuth, controller.getAllBussinessProfiles)

router.get("/by_name", checkAuth, controller.getbyName)

router.get("/profile_user", checkAuth, controller.getProfileUserFilter)

router.get("/by_interest", checkAuth, controller.getByInterest)

router.put("/update_profile/:id", checkAuth, controller.updateBussinessProfile)

router.delete("/delete_profile/:id", checkAuth, controller.deleteBusinessProfile)



module.exports = router