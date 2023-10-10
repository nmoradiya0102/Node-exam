const { Product } = require("../model");

// get product id
const getProductById = async (productId) => {
  return Product.findOne({ _id: productId })
};

// get product list
const getProductList = async (filter, options) => {
  return Product.find(filter);
};

//  create product
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

// update product
const updateProduct = async (productId, reqBody) => {
  return Product.findOneAndUpdate(
    { _id: productId },
    { $set: reqBody },
    { new: true }
  );
};

//  delete product
const deleteProduct = async (productId) => {
  return Product.findOneAndDelete({ _id: productId });
};

module.exports = {
  getProductById,
  getProductList,
  createProduct,
  updateProduct,
  deleteProduct,
};