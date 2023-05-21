const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://igor:igor@cluster0.svotqiv.mongodb.net/netflix?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection successful"))
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", authRoute);
app.use(express.json);

app.listen(3000, () => {
  console.log("Backend server is running !");
});
