const CurrencyModel = require("../../models/Setting/CurrencySchema")

const createCurrency=async(req,res)=>{
    const {Name,Code,Status,Position,Symbal}=req.body

    try {
        const createdata=await CurrencyModel.create({
            Name,Code,Status,Position,Symbal
        })
        return res.status(200).json({
            data:createdata,
            message:'cureency created successfully',
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

const getallcurrency=async(req,res)=>{
    try {
        const getalldata=await CurrencyModel.find()

        return res.json({
            data:getalldata,
            message:'i have got all data successfully',
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

const deletecurrencydata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await CurrencyModel.findByIdAndDelete(id)
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
const updatecurrencydata=async(req,res)=>{
const {Name,Code,Status,Position,Symbal}=req.body
    const id=req.params._id
try {
const updatedata=await CurrencyModel.findByIdAndUpdate({_id:id},{$set:{ 
    Name,Code,Status,Position,Symbal}},{new:true})
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
    createCurrency,
    getallcurrency,
    deletecurrencydata,
    updatecurrencydata

}