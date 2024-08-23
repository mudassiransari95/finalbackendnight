let Designation= require('../../models/HRMmanagement/Designation')
const bcrypt= require('bcrypt')

const createDes= async(req,res)=>{
    let {desName,description}= req.body
    try {
       
         newDes= await new Designation({
            desName:desName,
            description:description
            
        })
        
        await newDes.save()
          res.status(200).json({success:true,msg:"designation created",newDes})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating designation",error:error.message})
    }
}

let deleteDes= async(req,res)=>{
    let id=req.params._id;
 try {
    await Designation.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"designation deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateDes =async(req,res)=>{
    let {desName,description}=req.body
    let id= req.params._id;
    try {
        let update= await Accessorry.findByIdAndUpdate({_id:id},{$set:{desName,description}},{new:true})
        res.status(200).json({success:true,msg:"designation updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating designation",error:error.message})
    }
}

const getAllDesignation= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allDes= await Designation.find({name:_id})
        if (allDes.length) {
            res.status(200).json({success:true,msg:"fetched all allDes list successfully",allDes})
            
        } else {
            return res.status(404).json({success:false,msg:"no des list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allDes"})
    }
}

module.exports={
    createDes,
    deleteDes,
    updateDes,
    getAllDesignation
}