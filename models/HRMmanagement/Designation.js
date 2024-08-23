const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designationSchema = new Schema({
    desName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
   
  
}, { timestamps: true });

module.exports = mongoose.model('Des', designationSchema);