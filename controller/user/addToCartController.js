const cartModel = require("../../models/cartProducts");

async function addToCartController(req, res) {
  try {
    const { productId } = req?.body;
    const currentUser = req?.userId;

    // Use findOneAndUpdate for atomic update with concurrency control
    const updatedCart = await cartModel.findOneAndUpdate(
      { productId, userId: currentUser },
      { $inc: { quantity: 1 }, $setOnInsert: { quantity: 1 } },
      { upsert: true, new: true } // Return the updated document
    );

    if (!updatedCart) {
      return res.json({
        message: "Product not found or error adding to cart",
        error: true,
        success: false,
      });
    }

    return res.json({
      data: updatedCart,
      message: "Product Added/Quantity Updated in Cart",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = addToCartController;
