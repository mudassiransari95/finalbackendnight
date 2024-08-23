const mongoose=require('mongoose')

const costingSchema=new mongoose.Schema({
          PartyName:String,
           Type:String,
          Fabrication:String,
           UnitPrice:Number
},{
    timesstamps:true
})

const CostingModel=mongoose.model('Costing',costingSchema)

 module.exports=CostingModel

 