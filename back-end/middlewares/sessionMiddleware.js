const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unathorized" });
  }
  return next();
};

module.exports = { isAuthenticated };
