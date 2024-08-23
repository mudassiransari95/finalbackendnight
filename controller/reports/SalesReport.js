const SalesReportModel = require("../../models/report/SalesReportSchema")


const createSalesReport=async(req,res)=>{
    const {PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body

    try {
        
        const purchaseReport=await SalesReportModel.create({
            PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status
        })
        return res.json({
            data:purchaseReport,
            success:true,
            error:false,
            message:"sales report created successfully"
        })

    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const getallsalesreport=async(req,res)=>{
    try {
        const getalldata=await SalesReportModel.find()
        return res.json({
            data:getalldata,
            message:"all sales report get successfully",
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

const deletesalesreportdata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await SalesReportModel.findByIdAndDelete(id)
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
const updatesalesreportdata=async(req,res)=>{
const {  PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body
    const id=req.params._id
try {
const updatedata=await SalesReportModel.findByIdAndUpdate({_id:id},{$set:{
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


// deletesalesreportdata
module.exports={
    createSalesReport,
    getallsalesreport,
    updatesalesreportdata,
    deletesalesreportdata

}