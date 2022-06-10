const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema ({
    username: { type: String, required: true},
    name: {type: String, required: true},
    dni: {type: String, required: true},
    nameOwner: {type: String, required: true},
    animal: {type: String, requiered: true},
    race: {type: String, requiered: true}
},{
    timestamps: true,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;