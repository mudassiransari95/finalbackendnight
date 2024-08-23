const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreditSchema = new Schema({
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
    creditVoucherNo: {
        type: String,
        required: true,
    },
    billDate: {
        type: String,
        required: true,
    },
    creditAmt: {
        type: String,
        required: true,
    },
    remark: {
        type: String,
        required: true,
    },
    transactionBy: {
        type: String,
        required: true,
    },
    paymentType: {
        type: String,
        required: true,
    }
    
    
}, { timestamps: true });

module.exports = mongoose.model('CreditVoucher', CreditSchema);