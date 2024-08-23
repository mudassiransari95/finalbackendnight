const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LedgerSchema = new Schema({
    partyName: {
        type: String,
        required: true,
    },
    partyType: {
        type: String,
        required: false,
        
    },
    totalBill: {
        type: String,
        required: true,
    },
    payAmt: {
        type: String,
        required: true,
    },
    advanceAmt: {
        type: String,
        required: true,
    },
    dueAmt: {
        type: String,
        required: true,
    },
    balance: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('PartyLedger', LedgerSchema);