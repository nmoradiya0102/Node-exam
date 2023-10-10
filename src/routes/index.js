const express = require("express");
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");
const orderRoute = require("./order.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/cart" , cartRoute);
router.use("/order" , orderRoute);

module.exports = router;