const {
  findUserByEmail,
  createUser,
} = require("../repositories/userRepository");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

const register = async (email, password) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error("User already exists");
  const hashedPassword = await hashPassword(password);
  return createUser(email, hashedPassword);
};

const login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user || !(await comparePassword(password, user.password)))
    throw new Error("Invalid credntials");
  return user;
};

module.exports = { register, login };
