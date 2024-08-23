const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CashSchema = new Schema({
    adjustment: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
      
    },
    amount: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    adjustmentDate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('CashInHand', CashSchema);