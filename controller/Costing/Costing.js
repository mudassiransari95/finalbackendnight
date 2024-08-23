const CostingModel = require("../../models/Costing/Costing")

const createcosting=async(req,res)=>{
    const  {  PartyName,
        Type,
 Fabrication,
   UnitPrice
}=req.body
    try {
        const createdata=await CostingModel.create({
            PartyName,
            Type,
     Fabrication,
       UnitPrice
        })

        return res.status(200).json({
            data:createdata,
            message:'costing data added successfully',
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

const getallcostinglist=async(req,res)=>{
    try {
        const getalldata=await  CostingModel.find()

        return res.status(200).json({
            data:getalldata,
            success:true,
            error:false,
            message:'all data get successfully'
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
    createcosting,
    getallcostinglist
}