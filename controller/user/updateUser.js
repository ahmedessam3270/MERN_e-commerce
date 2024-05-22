const userModel = require("../../models/userModel");

async function UpdateUserController(req, res) {
  try {
    const sessionUserId = req.userId;
    const { userId, email, name, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };

    const currUser = await userModel.findById(sessionUserId);

    console.log("user.role", currUser.role);

    const UpdatedUser = await userModel.findByIdAndUpdate(userId, payload);

    res.json({
      data: UpdatedUser,
      message: "User Updated successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UpdateUserController;
