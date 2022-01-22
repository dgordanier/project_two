const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema (
    {
        name: {type: String},
        price: {type: Number},
        description: {type: String},
        imageURL: {type: String},
        isAddedToOrder: {type: Boolean, default: false}

    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;