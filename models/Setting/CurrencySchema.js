const mongoose=require('mongoose')

const currenctSchema=new mongoose.Schema({
    Name:String,
    Code:String,
    Symbal:String,
    Position:String,
    Status:String
},
{
    timestamps:true
})

const CurrencyModel=mongoose.model('Corrency',currenctSchema)

module.exports=CurrencyModel