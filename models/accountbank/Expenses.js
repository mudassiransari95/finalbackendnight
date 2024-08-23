const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
      
    }
   
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpensesSchema);