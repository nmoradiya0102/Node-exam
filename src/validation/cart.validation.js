const Joi = require("joi");

const createCart = {
    body : Joi.object().keys({
        Mo_number : Joi.number().integer().required(),
        total_items : Joi.number().integer().required(),
        price : Joi.number().integer().required()
    })
}

module.exports = {
    createCart
}