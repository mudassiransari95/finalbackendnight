const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetListSchema = new Schema({
    orderNo: {
        type: String,
        required: true,
    },
    partyName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    totalQty: {
        type: Boolean,
        required: true,
    },
    avgUnitPrice: {
        type: String,
        required: true,
    },
    totalValue: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetListSchema);