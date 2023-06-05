const Blog = require("../models/blog");

const blog_index = (req, res) => {
  //* We don't create a new instance of the blog because we are not creating new document
  Blog.find() //! the find method gets us all documents inside the blog collection
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id).then((result) => {
    res.render("details", { title: result.title, body: result.body });
  });
};

module.exports = {
  blog_index,
  blog_details 
};
