const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        
    }
   
}, { timestamps: true });

module.exports = mongoose.model('Income', IncomeSchema);