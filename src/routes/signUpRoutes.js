const express = require("express")
const router = express.Router()

const controller = require("../controllers/signUpController")
const loginController = require("../controllers/loginController")
const checkAuth = require("../middlewares/auth")


router.get("/all", checkAuth, controller.getAll)

router.post("/create", controller.signUp)

router.post("/login", loginController.login)

router.put("/update_email/:id", checkAuth, controller.updateEmail)

router.put("/update_password/:id", checkAuth, controller.UpdatePassword)

router.delete("/delete/:id", checkAuth, controller.deleteUser)

module.exports = router