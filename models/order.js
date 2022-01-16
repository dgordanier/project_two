const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema (
    {
        cart: {type: Object},
        name: {type: String},
        email: {type: String},
        address: {type: String},
        paymentId: {type: String},
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
