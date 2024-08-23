const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankAccountSchema = new Schema({
    accHolderName: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: false,
    
    },
    accNo: {
        type: String,
        required: true,
    },
    branchName: {
        type: String,
        required: true,
    },
    routingSwiftNo: {
        type: String,
        required: true,
    },
    openBalance: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Bank', BankAccountSchema);