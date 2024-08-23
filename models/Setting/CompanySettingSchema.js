const mongoose=require('mongoose')


const companySettingSchema=new mongoose.Schema({

    CompanyName:String,
    CompanyEmail:String,
    Address:String,
    Logo:String,
    Remarks:String,
    Website:String,
    Fevicon:String
},{
    timestamps:true
})

const CompanySettingModel=mongosse.model('copanu Settimg',companySettingSchema)


module.exports=CompanySettingModel