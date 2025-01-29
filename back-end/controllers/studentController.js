const {
  addStudent,
  getStudents,
  deleteStudent,
} = require("../services/studentService");

const createStudentHandler = async (req, res) => {
  const { name, age, studentClass } = req.body;
  const userId = req.session.userId;
  try {
    const student = await addStudent(name, age, studentClass, userId);
    res.status(201).json({ student });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudentHandler = async (req, res) => {
  const userId = req.session.userId;
  try {
    const students = await getStudents(userId);
    res.status(200).json({ students });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudentHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteStudentById = await deleteStudent(id);
    res.status(200).json({ deleteStudentById });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createStudentHandler,
  getStudentHandler,
  deleteStudentHandler,
};
