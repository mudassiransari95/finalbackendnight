const CompanySettingModel = require("../../models/Setting/CompanySettingSchema")

const companySetting=async(req,res)=>{
const {CompanyName,CompanyEmail,Address,Logo,Remarks,Website,Fevicon}=req.body


try {
    
    const createCmpanySetting= await CompanySettingModel.create({
        CompanyName,CompanyEmail,Address,Logo,Remarks,Website,Fevicon
    })

    return res.status(200).json({
        data:createCmpanySetting,
        message:'company setting updated successfully',
        success:true,
        error:false
    })


    
} catch (error) {
    return res.json({
        message:error.message||error,
        success:false,
        error:true
    })
}
}

const updateCompanySetting=async(req,res)=>{
    try {
        // const update=await CompanySettingModel.findbyidandupdate({})
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=companySetting