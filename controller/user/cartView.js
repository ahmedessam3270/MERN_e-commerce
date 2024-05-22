const cartModel = require("../../models/cartProducts");

async function cartViewController(req, res) {
  try {
    const currentUserId = req?.userId;
    const currentUserProducts = await cartModel
      .find({ userId: currentUserId })
      .populate("productId");
    res.json({
      data: currentUserProducts,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      success: false,
      error: true,
    });
  }
}

module.exports = cartViewController;
