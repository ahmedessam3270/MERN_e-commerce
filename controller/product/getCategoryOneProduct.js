const productModel = require("../../models/productModel");

async function getProductCategoryController(req, res) {
  try {
    const productCategory = await productModel.distinct("category");
    // to store one product for each category
    const productByCategory = [];

    for (const category of productCategory) {
      const product = await productModel.findOne({ category });
      if (category) {
        productByCategory.push(product);
      }
    }
    res.json({
      message: "Category product",
      error: false,
      data: productByCategory,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = getProductCategoryController;
