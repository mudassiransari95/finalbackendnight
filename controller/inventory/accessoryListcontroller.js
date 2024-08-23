let Accessorry= require('../../models/inventory/Accessorylist')
const bcrypt= require('bcrypt')

const createAccessory= async(req,res)=>{
    let {name,unit,price,description,status}= req.body
    try {
       
         newAccessory= await new Accessorry({
            name:name,
            unit:unit,
            price:price,
            description:description,
            status:status,
        }) 
        
        await newAccessory.save()
          res.status(200).json({success:true,msg:"accessory created",newAccessory})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteAccessory= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Accessorry.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"accessory deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateAccessory =async(req,res)=>{
    let {name,unit,price,description,status}=req.body
    let id= req.params.id;
    try {
        let list= await Accessorry.findByIdAndUpdate({_id:id},{$set:{name,unit,price,description,status}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleAccessory= async(req,res)=>{
    let _id= req.params._id;
    try {
        let accessory= await Accessorry.findById(_id)
        res.status(200).json({success:true,msg:"single accessory detail fetched successfully",accessory})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllAccessory= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Accessorry.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all accessory list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createAccessory,
    deleteAccessory,
    updateAccessory,
    singleAccessory,
    getAllAccessory
}