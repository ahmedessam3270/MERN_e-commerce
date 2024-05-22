const productModel = require("../../models/productModel");

async function filterProductController(req, res) {
  try {
    const categoryList = req?.body?.category || [];
    const product = await productModel.find({
      category: {
        $in: categoryList,
      },
    });

    res.json({
      message: "product found",
      error: false,
      success: true,
      data: product,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = filterProductController;
