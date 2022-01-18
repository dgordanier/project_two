const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema (
    {
      items: [{
        itemName: {type: String},
        itemPrice: {type: Number}
      }],
      //totalQuantity: {type: Number},
      //totalPrice: {type: Number},
    },
    {
        timestamps: true,
    }
)

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;