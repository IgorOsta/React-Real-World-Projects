const Workout = require("../models/workoutModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//* Create Token function

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//*Login user
async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //*create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.json({ msg: error.message });
  }
}

//*Signup user
async function signUpUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //*create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { loginUser, signUpUser };
