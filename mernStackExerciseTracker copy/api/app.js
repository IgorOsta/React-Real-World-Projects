const express = require("express");
const path = require("path");
const routes = require("./routes/workouts");
const mongoose = require("mongoose");
const Workout = require("./models/workoutModel");
require("dotenv").config();
const port = process.env.PORT;
const dbURI = process.env.dbURI;
//! Credentials for API

const workout = new Workout({});
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log("connected to db & listening on port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
//* express app
const app = express();
//* middleware
//? This middleware attach the body to the request, this way we can read it req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* routes
//? setting the end point
app.use("/api/workouts", routes);
