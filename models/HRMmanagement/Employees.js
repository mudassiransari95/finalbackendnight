const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    employmentType: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    nidPassport: {
        type: String,
        required: false,
    },
    nidPassportBack: {
        type: String,
        required: false,
        
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Emp',empSchema);