const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commercialSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Commer', commercialSchema);