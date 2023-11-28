const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const apiRoute = require("./routers/api/zing.js");
const authRoute = require("./routers/auth.js");
const songRoute = require("./routers/favoriteSong.js");

const app = express();
app.use(cors())
dotenv.config()
app.use(express.json({}))

app.use("/api", apiRoute);
app.use("/v1/auth", authRoute)
app.use("/v1/song", songRoute)

// mongoose.set('bufferCommands', false);
// mongoose.connect(process.env.MONGODB_URL,{
//   useNewUrlParser: true
// })
// .then(() => {
//   console.log('connected to db');
// })
// .catch((err) => {
//   console.log(err.message);
// })
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error)
  }
}
connect()
app.listen(process.env.PORT || 8000, () => {
  console.log("server is running...");
});
