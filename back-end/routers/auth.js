const authController = require("../controllers/AuthController")

const router = require("express").Router()

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)

module.exports = router