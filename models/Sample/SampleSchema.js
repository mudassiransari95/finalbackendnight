const mongoose=require('mongoose')

const sampleSchema=new mongoose.Schema({
    OrderNo:String,
    Consignee:String,
    Style:String,
    Items:String,
    SampleType:String,
    GarmentsQty:Number
},{
    timestamps:true
})

const SampleModel=mongoose.model('Sample',sampleSchema)

module.exports=SampleModel