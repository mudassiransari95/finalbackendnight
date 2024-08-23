let Budget= require('../../models/orderManage/BudgetList')
const bcrypt= require('bcrypt')

const createBudget= async(req,res)=>{
    let {orderNo,partyName,type,style,totalQty,avgUnitPrice,totalValue,status}= req.body
    try {
       
         newBudget= await new Budget({
         orderNo: orderNo,
       partyName: partyName,
       type: type,
       style: style,
       totalQty: totalQty,
       avgUnitPrice: avgUnitPrice,
       totalValue: totalValue,
         status: status
        })
        
        await newBudget.save()
          res.status(200).json({success:true,msg:"Budget created",newBudget})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteBudget= async(req,res)=>{
    let id=req.params._id;
 try {
    await Budget.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Budget deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateBudget =async(req,res)=>{
    let {orderNo,partyName,type,style,totalQty,avgUnitPrice,totalValue,status}=req.body
    let id= req.params._id;
    try {
        let budgetList= await Budget.findByIdAndUpdate({_id:id},{$set:{orderNo,partyName,type,style,totalQty,avgUnitPrice,totalValue,status}},{new:true})
        res.status(200).json({success:true,msg:"Budgetlist updated successfully",budgetList})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleBudget= async(req,res)=>{
    let _id= req.params._id;
    try {
        let budget= await Budget.findById(_id)
        res.status(200).json({success:true,msg:"single Budget detail fetched successfully",budget})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllBudget= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allBudgetList= await Budget.find({name:_id})
        if (allBudgetList.length) {
            res.status(200).json({success:true,msg:"fetched all Budget list successfully",allBudgetList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createBudget,
    deleteBudget,
    updateBudget,
    singleBudget,
    getAllBudget
}