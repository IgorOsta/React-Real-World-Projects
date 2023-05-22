const express = require("express");

//express app
const app = express();

//listen for requests,every time we send a request to the server is going to run, app.get, and send back to browser the request
//routes
app.get("/", (req, res) => {
  res.status(201).json({
    msg: "Welcome to the app",
  });
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
