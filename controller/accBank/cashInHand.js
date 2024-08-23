let Cash= require('../../models/accountbank/CashInHand')
const bcrypt= require('bcrypt')

const createAdjustCash= async(req,res)=>{
    let {adjustment,type,amount,note,description,adjustmentDate}= req.body
    try {
       
         newCash= await new Cash({
        adjustment:adjustment,
        type:type,
        amount:amount,
        note:note,
        description:description,
        adjustmentDate:adjustmentDate
        }) 
        
        await newCash.save()
          res.status(200).json({success:true,msg:"Cash created",newCash})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteCash= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Cash.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Cash deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateCash =async(req,res)=>{
    let {adjustment,type,amount,note,description,adjustmentDate}=req.body
    let id= req.params.id;
    try {
        let list= await Cash.findByIdAndUpdate({_id:id},{$set:{adjustment,type,amount,note,description,adjustmentDate}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleCash= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Cash= await Cash.findById(_id)
        res.status(200).json({success:true,msg:"single Cash detail fetched successfully",Cash})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllCash= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Cash.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Cash list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createAdjustCash,
    deleteCash,
    updateCash,
    singleCash,
    getAllCash
}