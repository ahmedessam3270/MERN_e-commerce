const productModel = require("../../models/productModel");

async function getProductDetailsController(req, res) {
  try {
    const { productId } = await req.body;

    const product = await productModel.findById(productId);

    res.json({
      message: "product found",
      success: true,
      error: false,
      data: product,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      success: false,
      error: true,
    });
  }
}

module.exports = getProductDetailsController;
