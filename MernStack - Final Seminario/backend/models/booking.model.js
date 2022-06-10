const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema ({
    username: {type: String, required: true},
    date: {type: Date, required: true},
    hour: { type: Number, required: true},
    treatment: {type: String, required: true},
    petName: {type: String, required: true},
    nameOwner: {type: String, required: true},
},{
    timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;