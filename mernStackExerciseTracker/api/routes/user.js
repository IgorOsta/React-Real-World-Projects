const express = require("express");
const router = express.Router();
const { loginUser, signUpUser } = require("../controllers/userController");

//* Login route
router.post("/login", loginUser);

//* Signup route
router.post("/signup", signUpUser);

module.exports = router;
