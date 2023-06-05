const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

//*Login user
async function loginUser(req, res) {
  res.status(200).json({ msg: "login user..." });
}

//*Signup user
async function signUpUser(req, res) {
  res.status(200).json({ msg: "User Signed Up..." });
}

module.exports = { loginUser, signUpUser };
