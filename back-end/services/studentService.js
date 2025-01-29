const student = require("../models/student");
const {
  createStudent,
  findStudentByUser,
  deleteStudentById,
} = require("../repositories/studentRespository");

const addStudent = async (name, age, studentClass, userId) => {
  return createStudent(name, age, studentClass, userId);
};

const getStudents = async (userId) => {
  return findStudentByUser(userId);
};

const deleteStudent = async (studentId) => {
  return deleteStudentById(studentId);
};

module.exports = { addStudent, getStudents, deleteStudent };
