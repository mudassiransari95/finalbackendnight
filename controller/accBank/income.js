let Income= require('../../models/accountbank/Income')
const bcrypt= require('bcrypt')

const createIncome= async(req,res)=>{
    let {categoryName,description}= req.body
    try {
       
         newIncome= await new Income({
      categoryName: categoryName,
      description: description
        }) 
        
        await newIncome.save()
          res.status(200).json({success:true,msg:"Income created",newIncome})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteIncome= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Income.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Income deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateIncome =async(req,res)=>{
    let {categoryName,description}=req.body
    let id= req.params.id;
    try {
        let list= await Income.findByIdAndUpdate({_id:id},{$set:{categoryName,description}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleIncome= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Income= await Income.findById(_id)
        res.status(200).json({success:true,msg:"single Income detail fetched successfully",Income})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllIncome= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Income.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Income list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createIncome,
    deleteIncome,
    updateIncome,
    singleIncome,
    getAllIncome
}