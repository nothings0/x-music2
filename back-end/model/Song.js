const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
    encodeId: {
        type: String
    },
    name: {
        type: String
    },
    artist: {
        type: String
    },
    thumbnail: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model("Song", songSchema)