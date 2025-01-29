const Student = require("../models/student");

const createStudent = async (name, age, studentClass, userId) => {
  const student = new Student({ name, age, studentClass, userId });
  return student.save();
};

const findStudentByUser = async (userId) => {
  return Student.find({ userId });
};

const deleteStudentById = async (studentId) => {
  return await Student.findByIdAndDelete(studentId);
};

module.exports = { createStudent, findStudentByUser, deleteStudentById };
