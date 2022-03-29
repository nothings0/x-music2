const Song = require("../model/Song")

const favoriteSongController = {
    addSong: async(req, res) => {
        try {
            const newSong = await new Song({
                encodeId: req.body.idSong,
                name: req.body.name,
                artist: req.body.artist,
                thumbnail: req.body.thumbnail,
                user: req.user.id
            })
            //Save database
            const song = await newSong.save()
            res.status(200).json(song)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    
    getSong: async(req, res) => {
        try {
            let songs = await Song.find({user: req.user.id}).populate("user", ['userName'])
            res.status(200).json(songs);
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}
module.exports = favoriteSongController