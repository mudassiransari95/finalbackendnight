const mongoose=require('mongoose')


const SupplierSchema=new mongoose.Schema({
    PartyName:String,
    PartyEmail:String,
    Phone:String,
    Password:String,
    Address:String,
    BalanceType:String,
    OpeningBalance:String,
    Country:String,
    Remarks:String,
    Image:String
},
{
  timestamps:true  
})
const SupplierModel=mongoose.model('Supplier',SupplierSchema)

module.exports=SupplierModel