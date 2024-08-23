const SupplierModel = require("../../models/Party-list/SupplierSchema")


const createSupplier=async(req,res)=>{
    const {  PartyName,
        PartyEmail,
        Phone,
        Password,
        Address,
        BalanceType,
        OpeningBalance,
        Country,
        Remarks,
        Image  }=req.body
    try {
        const createdata=await SupplierModel.create({
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
            message:'supplier data created successfully',
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

const getallSupplierdata=async(req,res)=>{
    try {
        const getalldata=await SupplierModel.find()
        return res.status(200).json({
            data:getalldata,
            message:'all supplier data get successfully',
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
// fdhuvduivjnfdiud


const deletesupplierdata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await SupplierModel.findByIdAndDelete(id)
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
const updatesupplierdata=async(req,res)=>{
const {  PartyName,
    PartyEmail,
    Phone,
    Password,
    Address,
    BalanceType,
    OpeningBalance,
    Country,
    Remarks,
    Image   }=req.body
    const id=req.params._id
try {
const updatedata=await SupplierModel.findByIdAndUpdate({_id:id},{$set:{ 
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
}},{new:true})
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
    createSupplier,
    getallSupplierdata,
    deletesupplierdata,
    updatesupplierdata
}