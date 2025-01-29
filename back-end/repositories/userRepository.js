const User = require("../models/user");

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const createUser = async (email, password) => {
  const user = new User({ email, password });
  return user.save();
};

module.exports = { findUserByEmail, createUser };
