
const TransactionModel = require("../../models/report/TransactionSchema")


const createTransaction=async(req,res)=>{
    const {PartyName,PartyType,VoucherNo,VoucherType,PaymentMethod,PaymentType,Amount,CreditBy,Remarks}=req.body

    try {
        
        const taransaction=await TransactionModel.create({
            PartyName,PartyType,VoucherNo,VoucherType,PaymentMethod,PaymentType,Amount,CreditBy,Remarks
        })
        return res.json({
            data:taransaction,
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


const getallTransaction=async(req,res)=>{
    try {
        const getalldata=await TransactionModel.find()
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
    createTransaction,
    getallTransaction
}