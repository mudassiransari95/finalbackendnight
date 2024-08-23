let PartyLedger= require('../../models/accountbank/PartyLedger')
const bcrypt= require('bcrypt')

const createPartyLedger= async(req,res)=>{
    let {partyName,partyType,totalBill,payAmt,dueAmt,advanceAmt,balance}= req.body
    try {
       
         newPartyLedger= await new PartyLedger({
       partyname:partyName,
       partyType:partyType,
       totalBill:totalBill,
       payAmt:payAmt,
       dueAmt:dueAmt,
       advanceAmt:advanceAmt,
       balance:balance
        }) 
        
        await newPartyLedger.save()
          res.status(200).json({success:true,msg:"PartyLedger created",newPartyLedger})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deletePartyLedger= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await PartyLedger.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"PartyLedger deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updatePartyLedger =async(req,res)=>{
    let {date,totalPartyLedger,remark,totalAmt,type}=req.body
    let id= req.params.id;
    try {
        let list= await PartyLedger.findByIdAndUpdate({_id:id},{$set:{date,totalPartyLedger,remark,totalAmt,type}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singlePartyLedger= async(req,res)=>{
    let _id= req.params._id;
    try {
        let PartyLedger= await PartyLedger.findById(_id)
        res.status(200).json({success:true,msg:"single PartyLedger detail fetched successfully",PartyLedger})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllPartyLedger= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await PartyLedger.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all PartyLedger list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createPartyLedger,
    deletePartyLedger,
    updatePartyLedger,
    singlePartyLedger,
    getAllPartyLedger
}