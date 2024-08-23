const mongoose=require('mongoose')

const SupplierDueSchema=new mongoose.Schema({
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

const SupplierDueModel=mongoose.model('Supplier Due',SupplierDueSchema)

module.exports=SupplierDueModel