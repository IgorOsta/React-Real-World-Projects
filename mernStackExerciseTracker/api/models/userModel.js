const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

//! We are creating our own static method SignUp
userSchema.statics.signup = async function (email, password) {
  //* Validation
  //*Check if we have a value for email and password.

  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  //* Check if the email is a valid one.
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }
  //*Check if the password is a strong one, uppercase, lowercase, minimum length
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model("User", userSchema);
