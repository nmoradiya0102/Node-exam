const { cartService } = require("../services");

//  Create cart
const createCart = async( req , res ) => {
    try{
        const reqbody = req.body;
        const CartExists = await cartService.getCartByNumber(reqbody.getCartByNumber);
        if(!CartExists){
            throw new Error("Cart by this number already created..!");
        };
        const cart = await cartService.createCart(reqbody);
        if(!cart){
            throw new Error("something went wrong , please try again leter..!");
        }
        res.status(200).json({
            success : true,
            message : "Create Cart Successfully..!",
            data : cart
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// get cart list
const getCartList = async( req , res ) => {
    try{
        const cartList = await cartService.getCartList();
        if(!cartList) {
            throw new Error("this cart data not fonud..!");
        }
        res.status(200).json({
            success : true,
            message : "cart list found successfully..!",
            data : cartList
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// update cart
const  updateCart = async ( req , res ) => {
    try{
        const CartExists = await cartService.getCartById(req.params.cartId);
        if(!CartExists){
            throw new Error("Cart not found..!");
        }
        await cartService.updateCart(req.params.cartId,req.body);
        res.status(200).json({
            success : true,
            message : "Cart update successfully..!",
            data : req.body
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// Delete cart
const deleteCart = async ( req , res ) => {
    try{
        const CartExists = await cartService.getCartById(req.params.cartId)
        if(!CartExists){
            throw new Error("Cart not found..!");
        }
        const cartDelete = await cartService.deleteCart(req.params.cartId);
        if(!cartDelete){
            throw new Error("Cart not found.....")
        }
        res.status(200).json({
            success:true,
            message:"Cart deleted successfully",
        });
      } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    createCart,
    getCartList,
    updateCart,
    deleteCart
}