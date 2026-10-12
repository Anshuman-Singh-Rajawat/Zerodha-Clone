const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "All fields are required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "All fields are required"],
  },
  password: {
    type: String,
    required: [true, "All fields are required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UsersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = new model("user", UsersSchema);
