let AccessorryOrder= require('../../models/inventory/AccessoryOrder')
const bcrypt= require('bcrypt')

const createAccessoryOrder= async(req,res)=>{
    let {name,invoice,partyName,accessories,unit,qty,unitPrice,ttl}= req.body
    try {
       
        newAccessoryOrder= await new AccessorryOrder({
            name:accessories,
            invoice:invoice,
            partyName:partyName,
            accessories:accessories,
            // unit:unit, 
            qty:qty,
            unitPrice:unitPrice,
            ttl:ttl
        }) 
        
        await newAccessoryOrder.save()
          res.status(200).json({success:true,msg:"accessory created",newAccessoryOrder})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteAccessoryOrder= async(req,res)=>{
    let id=req.params.id;
 try {
    await AccessorryOrder.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"accessory deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateAccessoryOrder =async(req,res)=>{
    let {name,invoice,partyName,accessories,unit,qty,unitPrice,ttl}=req.body
    let id= req.params.id;
    try {
        let accOrderlist= await AccessorryOrder.findByIdAndUpdate({_id:id},{$set:{name,invoice,partyName,accessories,unit,qty,unitPrice,ttl}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",accOrderlist})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleAccessoryOrder= async(req,res)=>{
    let _id= req.params._id;
    try {
        let accessoryOrder= await AccessorryOrder.findById(_id)
        res.status(200).json({success:true,msg:"single accessory order detail fetched successfully",accessoryOrder})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllAccessoryOrder= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await AccessorryOrder.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all accessory order list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}


module.exports={
    createAccessoryOrder,
    deleteAccessoryOrder,
    updateAccessoryOrder,
    singleAccessoryOrder,
    getAllAccessoryOrder
    
}
