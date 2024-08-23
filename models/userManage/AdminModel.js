const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
   
    phone: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    confirmPassword: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    role:{
        type: String,
        required: false,
    }
    
}, { timestamps: false });

module.exports = mongoose.model('Admin', adminSchema);