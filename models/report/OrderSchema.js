const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    Image:String,
    OrderNo:String,
    PrtyName:String,
    PartyType:String,
    Merchendiser:String,
    Dept:String,
    GCM:String,
    ShipmentMode:String,
    PaymentMode:String,
    Season:String,
    Status:String
},{
    timestamps:true
})
const OrderModel=mongoose.model("Order",OrderSchema)
module.exports=OrderModel