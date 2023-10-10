const { productService } = require("../services");

/** Create product */
const createProduct = async (req, res) => {
  try {
    const createdProduct = await productService.createProduct(reqBody);

    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: createdProduct,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Get product details */
const getDetails = async (req, res) => {
  try {
    const productExists = await productService.getProductById(
      req.params.productId
    );
    if (!productExists) {
      throw new Error("Product not found!");
    }

    res.status(200).json({
      success: true,
      message: "Product details get successfully!",
      data: productExists,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong..",
    });
  }
};

/** Get prooduct list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    const getList = await productService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      data: getList,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Update product details */
const updateProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    res.status(200).json({
      success: true,
      message: "Product details update successfully..!",
      data: updateProduct,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong..",
    });
  }
};

/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong..",
    });
  }
};

module.exports = {
  createProduct,
  getDetails,
  getProductList,
  updateProduct,
  deleteProduct,
};