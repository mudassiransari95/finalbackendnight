const mongoose=require('mongoose')


const BuyerSchema=new mongoose.Schema({
    PartyName:String,
    PartyEmail:String,
    Phone:Number,
    Password:String,
    Address:String,
    BalanceType:String,
    OpeningBalance:Number,
    Country:String,
    Remarks:String,
    Image:String
},
{
  timestamps:true  
})
const BuyerModel=mongoose.model('Buyer',BuyerSchema)

module.exports=BuyerModel