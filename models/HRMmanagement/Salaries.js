const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    employee: {
        type: String,
        required: false,
    },
    month: {
        type: String,
        required: false,
    },
    year: {
        type: String,
        required: false,
    },
    salaryAmt: {
        type: String,
        required: false,
    },
    paidAmt: {
        type: String,
        required: false,
    },
    dueSalary: {
        type: String,
        required: false,
    },
    payMethod: {
        type: String,
        required: false,
    },
    payDate: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Sal',salarySchema);