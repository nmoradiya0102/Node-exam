const mongoose = require("mongoose");
// const config = require("../config/config");

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_description: {
      type: String,
      trim: true,
    },
    product_image: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default : 0
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;