const Workout = require("../models/workoutModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

//* Create Token function

const createToken = (_id) => {
 return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//*Login user
async function loginUser(req, res) {
  res.status(200).json({ msg: "login user..." });
}

//*Signup user
async function signUpUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.json({ msg: error.message });
  }
  res.json({ msg: "Signed up user " });
}

module.exports = { loginUser, signUpUser };
