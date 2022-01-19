const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema (
  {
    items: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    totalQuantity: {type: Number},
    totalPrice: {type: Number},
    //totalQuantity: {type: Number},
    //totalPrice: {type: Number},
  },
  {
      timestamps: true,
  }
)

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
