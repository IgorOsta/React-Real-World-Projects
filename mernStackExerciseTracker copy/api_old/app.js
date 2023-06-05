const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");
//express app
const app = express();
//*connect to mongodb
const dbURI =
  "mongodb+srv://igor:m7Bft6mzQYiANSRW@cluster0.svotqiv.mongodb.net/note-tuts?retryWrites=true&w=majority";
const Pass = "m7Bft6mzQYiANSRW";

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//? #############################################################################################
//* register ejs as a view engine
app.set("view engine", "ejs");
//* change folder for views
app.set("views", "../client/pages");
//* ############################################################################################### //

//* create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
  interval: "1d",
});

const PAGES_PATH = path.join(__dirname, "../client/pages");

//! Middleware and Static files
app.use(express.static(path.join(__dirname, "../public")));
app.use(morgan("combined", { stream: accessLogStream }));
//* it decodes the url, encoded by the form, so we can use it in req
app.use(express.urlencoded({ extended: true }));

//Blog routes
app.use("/", blogRoutes);
