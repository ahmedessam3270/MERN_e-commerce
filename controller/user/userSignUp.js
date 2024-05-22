const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { name, password, email } = req.body;

    const user = await userModel.findOne({ email });
    console.log("user", user);
    if (user) {
      throw new Error("A user with this email is already existed.");
    }

    console.log("req.body", req.body);
    if (!name) {
      throw new Error("Please provide your name");
    }
    if (!password) {
      throw new Error("Please provide your password");
    }
    if (!email) {
      throw new Error("Please provide your email");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Somthing is wrong");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
