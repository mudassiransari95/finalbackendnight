let Transaction= require('../../models/accountbank/MonthlyTransaction')
const bcrypt= require('bcrypt')

const createTransaction= async(req,res)=>{
    let {date,totalTransaction,remark,totalAmt,type}= req.body
    try {
       
         newTransaction= await new Transaction({
        date:date,
        totalAmt:totalAmt,
        type:type,
        totalTransaction:totalTransaction,
        remark:remark
        }) 
        
        await newTransaction.save()
          res.status(200).json({success:true,msg:"Transaction created",newTransaction})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteTransaction= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Transaction.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Transaction deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateTransaction =async(req,res)=>{
    let {date,totalTransaction,remark,totalAmt,type}=req.body
    let id= req.params.id;
    try {
        let list= await Transaction.findByIdAndUpdate({_id:id},{$set:{date,totalTransaction,remark,totalAmt,type}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleTransaction= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Transaction= await Transaction.findById(_id)
        res.status(200).json({success:true,msg:"single Transaction detail fetched successfully",Transaction})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllTransaction= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Transaction.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Transaction list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createTransaction,
    deleteTransaction,
    updateTransaction,
    singleTransaction,
    getAllTransaction
}