const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingListSchema = new Schema({
    orderNo: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: String,
        required: true,
    },
    partyName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    composition: {
        type: Boolean,
        required: true,
    },
    orderImage: {
        type: String,
        required: true,
    },
    processLoss: {
        type: String,
        required: true,
    },
    otherFabric: {
        type: String,
        required: true,
    },
    rib: {
        type: String,
        required: true,
    },
    collar: {
        type: String,
        required: true,
    },
    preparedBy: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingListSchema);