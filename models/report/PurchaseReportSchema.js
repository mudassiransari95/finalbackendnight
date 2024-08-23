const mongoose=require('mongoose')

const purchaseSchema=new mongoose.Schema({
    PartyName:String,
    PartyType:String,
    Category:String,
    TotalBill:String,
    TotalPaid:String,
    TotalDue:String,
    status:String,

},{
    timestamps:true
})

const PurchaseReportModel=mongoose.model('Purchase Report',purchaseSchema)

module.exports=PurchaseReportModel