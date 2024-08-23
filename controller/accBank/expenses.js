let Expense= require('../../models/accountbank/Expenses')
const bcrypt= require('bcrypt')

const createExpense= async(req,res)=>{
    let {categoryName,description}= req.body
    try {
       
         newExpense= await new Expense({
      categoryName: categoryName,
      description: description
        }) 
        
        await newExpense.save()
          res.status(200).json({success:true,msg:"Expense created",newExpense})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteExpense= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Expense.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Expense deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateExpense =async(req,res)=>{
    let {categoryName,description}=req.body
    let id= req.params.id;
    try {
        let list= await Expense.findByIdAndUpdate({_id:id},{$set:{categoryName,description}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleExpense= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Expense= await Expense.findById(_id)
        res.status(200).json({success:true,msg:"single Expense detail fetched successfully",Expense})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllExpense= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Expense.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Expense list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createExpense,
    deleteExpense,
    updateExpense,
    singleExpense,
    getAllExpense
}