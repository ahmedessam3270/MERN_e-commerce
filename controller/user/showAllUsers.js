const userModel = require("../../models/userModel");

async function showAllUsersController(req, res) {
  console.log("userId", req.userId);
  const allUsersData = await userModel.find();
  res.json({
    message: "all users data",
    data: allUsersData,
    success: true,
    error: false,
  });
  try {
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = showAllUsersController;
