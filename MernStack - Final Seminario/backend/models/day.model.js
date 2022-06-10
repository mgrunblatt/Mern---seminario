const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthSchema = new Schema ({
    date: { type: Date, required: true},
    hour: {type: Number, required: true},
    reserved: {type: Boolean, required: true},
},{
    timestamps: true,
});

const Day = mongoose.model('Day', monthSchema);

module.exports = Day;