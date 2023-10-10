const { Cart } = require("../model");

const getCartByNumber = async(number) => {
    return Cart.findOne({number});
}

const getCartById = async(cartId) => {
    return Cart.findById(cartId);
}

const createCart = async(reqbody) => {
    return Cart.create(reqbody);
}

const getCartList = async() => {
    return Cart.find();
}

const deleteCart = async(cartId) => {
    return Cart.findByIdAndDelete(cartId);
}

const updateCart = async(cartId,reqbody) => {
    return Cart.findByIdAndUpdate(cartId,{$set:reqbody});
}

module.exports = {
    getCartByNumber,
    getCartById,
    createCart,
    getCartList,
    deleteCart,
    updateCart
}