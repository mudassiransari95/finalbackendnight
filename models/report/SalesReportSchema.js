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

const SalesReportModel=mongoose.model('Sales Report',purchaseSchema)

module.exports=SalesReportModel