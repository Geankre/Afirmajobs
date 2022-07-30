const controller = require("../controllers/userController")
const express = require("express")
const router = express.Router()

const checkAuth = require("../middlewares/auth")

router.post("/profile", checkAuth, controller.createUserProfile)

router.get("/all", checkAuth, controller.getAllUserProfiles)

router.get("/by_name", checkAuth, controller.getbyName)

router.get("/by_interest", checkAuth, controller.getByInterest)

router.put("/update_profile/:id", checkAuth, controller.updateUserProfile)

router.delete("/delete_profile/:id", checkAuth, controller.deleteUserProfile)



module.exports = router