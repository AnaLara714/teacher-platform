const express = require("express");
const {
  createStudentHandler,
  getStudentHandler,
  deleteStudentHandler,
} = require("../controllers/studentController");
const { isAuthenticated } = require("../middlewares/sessionMiddleware");

const router = express.Router();

router.post("/", isAuthenticated, createStudentHandler);
router.get("/", isAuthenticated, getStudentHandler);
router.delete("/delete/:id", isAuthenticated, deleteStudentHandler);

module.exports = router;
