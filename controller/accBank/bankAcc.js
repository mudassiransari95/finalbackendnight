let Bank= require('../../models/accountbank/BankAcc')
const bcrypt= require('bcrypt')

const createNewBank= async(req,res)=>{
    let {accHolderName,bankName,branchName,accNo,routingSwiftNo,openBalance}= req.body
    try {
       
         newBank= await new Bank({
         accHolderName:accHolderName,
         bankName:bankName,
         branchName:branchName,
         accNo:accNo,
         routingSwiftNo:routingSwiftNo,
         openBalance:openBalance
        }) 
        
        await newBank.save()
          res.status(200).json({success:true,msg:"Bank created",newBank})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteBank= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Bank.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Bank deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateBank =async(req,res)=>{
    let {accHolderName,bankName,branchName,accNo,routingSwiftNo,openBalance}=req.body
    let id= req.params.id;
    try {
        let list= await Bank.findByIdAndUpdate({_id:id},{$set:{accHolderName,bankName,branchName,accNo,routingSwiftNo,openBalance}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        res.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleBank= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Bank= await Bank.findById(_id)
        res.status(200).json({success:true,msg:"single Bank detail fetched successfully",Bank})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllBank= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Bank.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Bank list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createNewBank,
    deleteBank,
    updateBank,
    singleBank,
    getAllBank
}