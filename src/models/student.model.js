const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("student", StudentSchema);

module.exports = User;
// name, city, age, education, gender, contact and add it to students collection.
