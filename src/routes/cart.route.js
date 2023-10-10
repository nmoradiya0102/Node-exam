const express = require("express");
const validate = require("../middleware/validate");
const { cartValidation } = require("../validation");
const { cartController } = require("../controller");

const router = express.Router();

router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
)

router.get(
    "/list",
    cartController.getCartList
)

router.put(
    "/update-cart/:cartId",
    validate(cartValidation.createCart),
    cartController.updateCart
)

router.delete(
    "/delete-cart/:cartId",
    cartController.deleteCart
)

module.exports = router