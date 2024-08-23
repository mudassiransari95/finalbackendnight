const mongoose=require('mongoose')

const buyerSchema=new mongoose.Schema({
    PartyName:String,
    PartyType:String,
    Phone:Number,
    Address:String,
    DueAmount:Number,
    Remarks:String 

},{
    timestamps:true
})

const BuyerDueModel=mongoose.model('BuyerDue',buyerSchema)

module.exports=BuyerDueModel