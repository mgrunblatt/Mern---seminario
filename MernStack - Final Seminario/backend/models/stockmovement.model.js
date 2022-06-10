const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockMovementSchema = new Schema ({
    username: { type: String, required: true},
    productName: { type: String, required: true},
    movementType: {type: String, required: true},
    quantity: {type: Number, required: true},
    stockBalance: {type: Number, required: true},
    date: {type: Date, requiered: true}
},{
    timestamps: true,
});

const StockMovement = mongoose.model('StockMovement',stockMovementSchema);

module.exports = StockMovement;