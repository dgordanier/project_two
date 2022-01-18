const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema (
    {
      items: [{
        itemName: String,
        itemPrice: Number,
        itemDescription: String,
        itemImageURL: String
      }],
    },
    {
        timestamps: true,
    }
)

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;