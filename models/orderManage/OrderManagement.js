const mongoose = require('mongoose');


const orderListSchema = new mongoose.Schema({
    orderNo: {
        type: String,
        
    },
    image: {
        type: String,
        
    },
    party: {
        type: String,
        
    },
    merchandiser: {
        type: String,
        
    },
    gsm: {
        type: String,
        
    },
    shipMode: {
        type: String,
        
    },
    payMode: {
        type: String,
        
    },
    year: {
        type: String,
        
    },
    season: {
        type: String,
        
    },
    totalQty: {
        type: String,
        
    },
    totalUnitPrice: {
        type: String,
        
    },
    totalValue: {
        type: String,
        
    },
    status: {
        type: String,
        
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Orderlist', orderListSchema);
