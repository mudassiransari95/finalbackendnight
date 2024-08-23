const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    PartyName:String,
    PartyType:String,
    VoucherNo:String,
    VoucherType:String,
    PaymentMethod:String,
    PaymentType:String,
    Amount:Number,
    CreditBy:String,
    Remarks:String

},{
    timestamps:true
})

const TransactionModel=mongoose.model('Transaction',transactionSchema)

module.exports=TransactionModel