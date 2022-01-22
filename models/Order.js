const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema (
    {
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        imageURL: {type: String}
    },
    {
        timestamps: true,
    }
)

const orderSchema = new Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        street: {type: String, required: true},
        unit: {type: String},
        city: {type: String, required: true},
        state: {type: String, minlength: 2, maxlength: 2, uppercase: true},
        zip: {type: Number, minlength: 5, maxlength: 5, required: true},
        cardNumber: {type: Number, requried: true},
        exp: {type: Date, requried: true},
        cvv: {type: Number, requried: true},
        cart: [cartSchema],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Order", orderSchema)