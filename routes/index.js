const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const showUserDetailsController = require("../controller/user/showUserDetails");
const authToken = require("../middleware/authToken");
const userLogoutController = require("../controller/user/userLogout");
const showAllUsersController = require("../controller/user/showAllUsers");
const UpdateUserController = require("../controller/user/updateUser");
const uploadProductController = require("../controller/product/uploadProduct");
const getProductsController = require("../controller/product/getProducts");
const updateProductController = require("../controller/product/updateProduct");
const getProductCategoryController = require("../controller/product/getCategoryOneProduct");
const getHomeCategoryProduct = require("../controller/product/getHomeCategoryProduct");
const getProductDetailsController = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const productsAddedInCartCount = require("../controller/user/productsAddedInCartCount");
const cartViewController = require("../controller/user/cartView");
const updateCartProductsController = require("../controller/user/updateCartProducts");
const deleteCartProductController = require("../controller/user/DeleteCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, showUserDetailsController);
router.get("/userlogout", userLogoutController);

// ADMIN-PANEL
router.get("/all-users", authToken, showAllUsersController);
router.post("/update-user", authToken, UpdateUserController);

// PRODUCT
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-products", getProductsController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-product-category", getProductCategoryController);
router.post("/get-home-category", getHomeCategoryProduct);
router.post("/product-details", getProductDetailsController);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

// user Adding to cart
router.post("/add-to-cart", authToken, addToCartController);
router.get("/products-in-cart-count", authToken, productsAddedInCartCount);
router.get("/view-cart", authToken, cartViewController);
router.post("/update-cart-product", authToken, updateCartProductsController);
router.post("/delete-cart-product", authToken, deleteCartProductController);

module.exports = router;
