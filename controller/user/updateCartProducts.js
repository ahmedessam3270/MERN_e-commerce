const cartModel = require("../../models/cartProducts");

async function updateCartProductsController(req, res) {
  try {
    const cartProductId = req?.body?._id;
    const updatedQuantity = req?.body?.quantity;
    const updatedProduct = await cartModel.updateOne(
      { _id: cartProductId },
      {
        ...(updatedQuantity && { quantity: updatedQuantity }),
      }
    );

    res.json({
      message: "Product Updated",
      error: false,
      data: updatedProduct,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateCartProductsController;
