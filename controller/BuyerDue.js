const BuyerDueModel = require("../models/BuyerDueSchema")

const createBuyerDue=async(req,res)=>{

    const {PartyName,PartyType,Phone,Address,DueAmount,Remarks}=req.body
    try {
        const buyercreate=await BuyerDueModel.create({
            PartyName,PartyType,Phone,Address,DueAmount,Remarks
        })
        res.status(200).json({
            data:buyercreate,
            message:'data created Successfully',
            success:true,
            error:false,

        })
        
    } catch (error) {

        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const BuyerDuelist=async(req,res)=>{
try {

    const buyerlist=await BuyerDueModel.find()
    if(buyerlist){
        return res.json({
            data:buyerlist,
            success:true,
            error:false,
            message:'i have fetched all data'
        })
    }
    
} catch (error) {
    return res.json({
        message:error.message||error,
        success:false,
        error:true
    })
}
}

const buyerdueSearch=async(req,res)=>{
    const query=req.query.q

try {
    
const regexp=new RegExp(query ,'i' ,'g')
const searchdata=await BuyerDueModel.find({
    '$or':[

            {
                PartyName:regexp
            },
            {
                PartyType :regexp
            }
    ]
})

res.json({
    data:searchdata,
    message:'searching start successfully',
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

const deletebuyerduedata=async(req,res)=>{
 
    const id=req.params._id
try {
const deletedata=await BuyerDueModel.findByIdAndDelete(id)
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
const updatebuyerduedata=async(req,res)=>{
const { PartyName,PartyType,Phone,Address,DueAmount,Remarks}=req.body
    const id=req.params._id
try {
const updatedata=await BuyerDueModel.findByIdAndUpdate({_id:id},{$set:{
    PartyName,PartyType,Phone,Address,DueAmount,Remarks}},{new:true})
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
    createBuyerDue,
    BuyerDuelist,
    buyerdueSearch,
    updatebuyerduedata,
    deletebuyerduedata
}