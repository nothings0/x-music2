const express = require("express")
const router = express.Router()

const zing = require("../../controllers/ZingController")

// get song
router.get("/song", zing.getSong)

// get playlist
router.get("/playlist", zing.getPlaylist)

// get home
router.get("/home", zing.getHome)

// get top100
router.get("/top100", zing.getTop100)

// get charthome
router.get("/chart-home", zing.getChartHome)

// get chart release
router.get("/chart-release", zing.getNewReleaseChart)

// get info song
router.get("/info", zing.getInfo)

// get Artist
router.get("/artist", zing.getArtist)

// get lyric
router.get("/lyric", zing.getLyric)

// search
router.get("/search", zing.search)

// getListMV
router.get("/listMV", zing.getListMV)

// get category
router.get("/category", zing.getCategoryMV)

// get category
router.get("/video", zing.getVideo)

module.exports = router