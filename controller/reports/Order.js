const OrderModel = require("../../models/report/OrderSchema")

const OrderCreate=async(req,res)=>{
    const {Image,orderNo,PrtyName,PartyType,Merchendiser,Dept,GCM,ShipmentMode,PaymentMode,Season,Status}=req.body

    try {

        const createorder=await OrderModel.create({
            Image,orderNo,PrtyName,PartyType,Merchendiser,Dept,GCM,ShipmentMode,PaymentMode,Season,Status
        })
        return res.json({
            data:createorder,
            message:"order data created successfully",
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

const getallorderdata=async(req,res)=>{
    try {
        const getdata=await OrderModel.find()
        return res.json({
            data:getdata,
            message:"get all data successfully",
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
    OrderCreate,
    getallorderdata
}