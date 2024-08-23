const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyCashbookSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    recievablePaymentPurpose: {
        type: String,
        required: false,
        
    },
    cvDvNumber: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    creditAmt: {
        type: String,
        required: true,
    },
    billDate: {
        type: String,
        required: true,
    },
    billNo: {
        type: String,
        required: true,
    },
    debitAmt: {
        type: String,
        required: true,
    },
    billAmt: {
        type: String,
        required: true,
    },
    dueBill: {
        type: String,
        required: true,
    },
    remark: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('DailyCashbook', DailyCashbookSchema);