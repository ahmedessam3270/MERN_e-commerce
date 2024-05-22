const productModel = require("../../models/productModel");

async function getProductsController(req, res) {
  try {
    const allProducts = await productModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "all Products are ready",
      success: true,
      error: false,
      data: allProducts,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = getProductsController;
