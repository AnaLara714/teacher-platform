const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  studentClass: { type: Number, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
