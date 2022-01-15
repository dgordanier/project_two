const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema (
    {
        orderNumber: {type: Number, required: true},
        amount: {type: Number, min: 0.01, required: yes},
        productId: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
        userId: [{type: mongoose.Schema.Types.ObjectId, ref: "Customer"}],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Order", orderSchema);