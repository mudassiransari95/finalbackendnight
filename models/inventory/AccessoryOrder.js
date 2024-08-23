const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessoryOrderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    invoice: {
        type: String,
        required: false,
    },
    partyName: {
        type: String,
        required: false,
    },
    accessories: {
        type: String,
        required: false,
    },
    unit: {
        type: Boolean,
        required: false,
    },
    qty: {
        type: String,
        required: false,
    },
    unitPrice: {
        type: String,
        required: false,
    },
    ttl: {
        type: String,
        required: false,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('AOL', accessoryOrderSchema);