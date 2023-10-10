const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_status :{
            type:String,
            trim:true
        },
        payment_method:{
            type:String,
            trim:true
        },
        User:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        Cart:{
            type:mongoose.Types.ObjectId,
            ref:"Cart"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const order = mongoose.model("Order",orderSchema)
module.exports = order;