const express = require("express");
const validate = require("../middleware/validate");
const { orderValidation } = require("../validation");
const { orderController } = require("../controller");
const router = express.Router();

router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
)

router.get(
    "/list",
    orderController.getOrderList
)

router.put(
    "/update-order/:orderId",
    validate(orderValidation.createOrder),
    orderController.updateOrder
)

router.delete(
    "/delete-order/:orderId",
    orderController.deleteOrder
    )

module.exports = router