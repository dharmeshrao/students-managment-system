const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    admin: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("student", UserSchema);

module.exports = User;
// name, city, age, education, gender, contact and add it to students collection.
