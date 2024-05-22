const cartModel = require("../../models/cartProducts");

async function productsAddedInCartCount(req, res) {
  try {
    const userId = req?.userId;
    const count = await cartModel.countDocuments({
      userId: userId,
    });
    res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message || error,
      success: false,
      error: true,
    });
  }
}

module.exports = productsAddedInCartCount;
