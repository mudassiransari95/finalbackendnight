const mongoose=require('mongoose')


const ShipmentSchema=new mongoose.Schema({
    InvoiceNo:String,
    OrderNo:String,
    Creater:String,
    TotalQty : Number,
    TotalCM : String,
    year:{
        type:String
    },
    month:{
        type:String
    },
},
{
    timestamps:true
})

const ShipmentModel=mongoose.model('Shipment',ShipmentSchema)

module.exports=ShipmentModel

