const { Order } = require("../model");

const createOrder = async(reqbody) => {
    return Order.create(reqbody);
}

const getOrderByUser = async(user) => {
    return Order.findOne({user});
}

const getOrderList = async() => {
    return Order.find().populate("Cart").populate("User");
}

const getOrderById = async(orderId) => {
    return Order.findById(orderId);
}

const updateOrder = async(orderId,reqbody) => {
    return Order.findByIdAndUpdate(orderId,{$set:reqbody});
}

const deleteOrder = async(orderId) => {
    return Order.findByIdAndDelete(orderId);
}

module.exports = {
    createOrder,
    getOrderByUser,
    getOrderList,
    getOrderById,
    updateOrder,
    deleteOrder
}