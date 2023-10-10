const express = require("express");
const validate = require("../middlewares/validate");
const { productValidation } = require("../validation");
const { productController } = require("../controller");

const router = express.Router();

/** Create product */
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product details */
router.get(
  "/details/:productId",
  productController.getDetails
);

/** Get production list */
router.get(
  "/list",
  productController.getProductList
);

/** Update product details */
router.put(
  "/update/:productId",
  productController.updateProduct
);

/** Delete product */
router.delete(
  "/delete/:productId",
  productController.deleteProduct
);

module.exports = router;