const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    username: { type: String, required: true},
    product: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    brand: {type: String, requiered: true}
},{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;