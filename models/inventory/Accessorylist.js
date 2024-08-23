const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('AL', accessorySchema);