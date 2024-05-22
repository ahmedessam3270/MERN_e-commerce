const cartModel = require("../../models/cartProducts");

async function deleteCartProductController(req, res) {
  try {
    const cartProductId = req?.body?._id;
    const deletedProduct = await cartModel.deleteOne({
      _id: cartProductId,
    });

    res.json({
      message: "Product Deleted from the Cart",
      error: false,
      data: deletedProduct,
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

module.exports = deleteCartProductController;
