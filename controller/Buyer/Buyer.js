const BuyerModel = require("../../models/Party-list/BuyerSchema")

const createbuyer=async(req,res)=>{
    const {
        PartyName,
        PartyEmail,
        Phone,
        Password,
        Address,
        BalanceType,
        OpeningBalance,
        Country,
        Remarks,
        Image  
    }=req.body
    try {
        const createdata=await BuyerModel.create({
            PartyName,
            PartyEmail,
            Phone,
            Password,
            Address,
            BalanceType,
            OpeningBalance,
            Country,
            Remarks,
            Image        
        })
        return res.json({
            data:createdata,
            message:'buyer data created successfully',
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

const getallbuyerdata=async(req,res)=>{
    try {
        const getalldata=await BuyerModel.find()
        return res.status(200).json({
            data:getalldata,
            message:'all buyer data get successfully',
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
    createbuyer,
    getallbuyerdata
}