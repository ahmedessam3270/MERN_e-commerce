const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");

async function uploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;
    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }
    const uploadedProduct = new productModel(req.body);
    const savedProduct = await uploadedProduct.save();
    res.status(201).json({
      message: "Product uploaded successfully",
      success: true,
      error: false,
      data: savedProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = uploadProductController;
