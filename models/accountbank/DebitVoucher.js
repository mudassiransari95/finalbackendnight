const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DebitSchema = new Schema({
    selectParty: {
        type: String,
        required: true,
    },
    select: {
        type: String,
        required: false,
       
    },
    payMethod: {
        type: String,
        required: true,
    },
    debitVoucherNo: {
        type: String,
        required: true,
    },
    billDate: {
        type: String,
        required: true,
    },
    debitAmt: {
        type: String,
        required: true,
    },
    remark: {
        type: String,
        required: true,
    },
    particulars: {
        type: String,
        required: false,
    },
    paymentType: {
        type: String,
        required: false,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('DebitVoucher', DebitSchema);