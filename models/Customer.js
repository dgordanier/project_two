const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        shippingAddress: {
            street: {type: String, required: true},
            city: { type: String, required: true},
            state: {
                type: String,
                uppercase: true,
                required: true,
                enum: statesArray
            },
            zip: { type: Number},
        },
        billingAddress: {
            street: {type: String, required: true},
            city: { type: String, required: true},
            state: {
                type: String,
                uppercase: true,
                required: true,
                enum: statesArray
            },
            zip: { type: Number},
        },
        creditCard: {type: Number, required: true},
        expiration: {type: Date},
        CVV: {type: Number},
    },
    {
        timestamps: true,
    }
)

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;