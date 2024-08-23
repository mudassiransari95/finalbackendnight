const SalesReportModel = require("../../models/report/SalesReportSchema")
const SupplierDueModel = require("../../models/report/SupplierDueSchema")


const createSupplierDue=async(req,res)=>{
    const {PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body

    try {
        
        const purchaseReport=await SupplierDueModel.create({
            PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status
        })
        return res.json({
            data:purchaseReport,
            success:true,
            error:false,
            message:"supplier due created successfully"
        })

    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const getallSupplierDue=async(req,res)=>{
    try {
        const getalldata=await SupplierDueModel.find()
        return res.json({
            data:getalldata,
            message:"all supplier get successfully",
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
    createSupplierDue,
    getallSupplierDue
}