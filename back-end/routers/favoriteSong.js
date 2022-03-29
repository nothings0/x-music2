const favoriteController = require("../controllers/FavoriteSongController")
const router = require("express").Router()
const verifyToken = require('../middleware/auth')

router.post("/", verifyToken, favoriteController.addSong)
router.get("/", verifyToken, favoriteController.getSong)
module.exports = router