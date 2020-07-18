const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    id: { type: String, required: true },
    date: { type: String, required: true },
    text: { type: String, required: true }
}, {
    timestamps: true,
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;