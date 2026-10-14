const UsersModel = require("../model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const newUser = await new UsersModel({
      email,
      username,
      password,
      createdAt,
    });
    await newUser.save();
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newUser });
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: Object.values(err.errors)[0].message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required!" });
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email!" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email!" });
    }
    console.log("LOGIN EMAIL:", email);
    console.log("USER FOUND:", user._id, user.username, user.email);
    const token = createSecretToken(user._id);
    console.log("TOKEN CREATED FOR USER ID:", user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (err) {
    console.error(err);
  }
};
