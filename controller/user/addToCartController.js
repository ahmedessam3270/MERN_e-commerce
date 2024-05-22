const cartModel = require("../../models/cartProducts");

async function addToCartController(req, res) {
  try {
    const { productId } = req?.body;
    const currentUser = req?.userId;
    const isProductInCart = await cartModel.findOne({ productId });
    if (isProductInCart) {
      return res.json({
        message: "Already exists in cart",
        error: true,
        success: false,
      });
    }

    const payload = {
      productId,
      quantity: 1,
      userId: currentUser,
    };
    const newProductAddedToCart = new cartModel(payload);
    const productSaved = await newProductAddedToCart.save();
    return res.json({
      data: productSaved,
      message: "Product Added in Cart",
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
