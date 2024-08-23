const PurchaseReportModel = require("../../models/report/PurchaseReportSchema")

const createpurchaseReport=async(req,res)=>{
    const {PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body

    try {
        
        const purchaseReport=await PurchaseReportModel.create({
            PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status
        })
        return res.json({
            data:purchaseReport,
            success:true,
            error:false,
            message:"purchase report created successfully"
        })

    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const getallpurchasereport=async(req,res)=>{
    try {
        const getalldata=await PurchaseReportModel.find()
        return res.json({
            data:getalldata,
            message:"all purchase report get successfully",
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
const deletepurchasereportdata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await PurchaseReportModel.findByIdAndDelete(id)
res.status(200).json({
    data:deletedata,
    message:'data deleted successfully',
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
const updatepurchasereportdata=async(req,res)=>{
const {  PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body
    const id=req.params._id
try {
const updatedata=await PurchaseReportModel.findByIdAndUpdate({_id:id},{$set:{
    PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}},{new:true})
res.status(200).json({
    data:updatedata,
    message:'data updated successfully',
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



module.exports={
    createpurchaseReport,
    getallpurchasereport,
    updatepurchasereportdata,
    deletepurchasereportdata
}