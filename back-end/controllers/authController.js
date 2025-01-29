const { login, register } = require("../services/authService");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await register(email, password);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    req.session.userId = user.id;
    res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ message: "Logout successefull" });
  });
};

module.exports = { registerUser, loginUser, logoutUser };
