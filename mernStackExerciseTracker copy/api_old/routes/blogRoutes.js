const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
//!Mongoose and mongo sandboxes routes
router.get("/add-blog", (req, res) => {
  //creating a new instance of the Blog
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  //it returns a promise
  blog
    .save() //*Save the document to db, and return a copy of it
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
    
});

//! How to retrieve the blog collection with all the blog document from the db?
router.get("/");

//! retrieving single blog collection
router.get("single-blog", (req, res) => {
  Blog.findById("646fc577dca14a9aebb899b1").then((result) => {
    res.send(result);
  });
});

router.post("blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/create", (req, res) => {
  res.render("create");
});

router.get("blogs/:id", blogController.blog_details);

router.get("/", blogController.blog_index);

router.get("blogs", (req, res) => {
  res.render("about");
});

//! Redirects
router.get("about-us", (req, res) => {
  res.redirect("/about");
});
//! 404 Pages
//! It should always be in the bottom, because it will be the last to execute if none of the above address match.

router.use((req, res) => {
  res.render("404");
});

module.exports = router;
