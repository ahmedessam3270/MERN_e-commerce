const productModel = require("../../models/productModel");

async function getHomeCategoryProduct(req, res) {
  const { category } = req?.body || req?.query;
  const product = await productModel.find({ category });

  res.json({
    data: product,
    message: "product in the home page",
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

module.exports = getHomeCategoryProduct;
