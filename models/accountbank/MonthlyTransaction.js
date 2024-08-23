const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonthlyTransactionSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    totalTransaction: {
        type: String,
        required: false,
      
    },
    totalAmt: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    remark: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Trans', MonthlyTransactionSchema);