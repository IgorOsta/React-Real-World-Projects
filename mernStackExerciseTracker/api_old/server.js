// const express = require("express");
const path = require("path");
// //express app
// const app = express();

// //listen for requests,every time we send a request to the server is going to run, app.get, and send back to browser the request
// //routes
// app.get("/", express.static(path.join(__dirname, "../client")));
// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
const fs = require("fs");
const http = require("http");
const PAGES_PATH = path.join(__dirname, "../client/pages");

//*Create a server
const server = http.createServer((req, res) => {
  let pageName = "";
  //! Set header Content-type
  res.setHeader("Content-Type", "text/html");
  //!Send an html file based on the route
  switch (req.url) {
    case "/": {
      pageName = "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      pageName = "about.html";
      res.statusCode = 200;
      break;
    }
    case "/about-me": {
      res.writeHead(301, { Location: "/about" });
      res.end();
      break;
    }
    default: {
      pageName = "404.html";
      res.statusCode = 404;
      break;
    }
  }
  if (pageName !== "/about-me") {
    fs.readFile(path.join(PAGES_PATH, `/${pageName}`), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

//* Server is listening to requests
server.listen(3000, () => {
  console.log("server listening on");
});
