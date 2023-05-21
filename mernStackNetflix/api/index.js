const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://igor:igor@cluster0.svotqiv.mongodb.net/netflix?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection successful"));

app.listen(8800, () => {
  console.log("Backend server is running !");
});
