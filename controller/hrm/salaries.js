let Salary= require('../../models/HRMmanagement/Salaries')
const bcrypt= require('bcrypt')

const createSal= async(req,res)=>{
    let {employee,month,year,salaryAmt,paidAmt,dueSalary,payMethod,payDate,notes}= req.body
    try {
       
         newSalary= await new Salary({
            employee:employee,
            month:month,
            year:year,
            salaryAmt:salaryAmt,
            paidAmt:paidAmt,
            dueSalary:dueSalary,
            payMethod:payMethod,
            payDate:payDate,
            notes:notes
            
        })
        
        await newSalary.save()
          res.status(200).json({success:true,msg:"Salary created",newSalary})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating Salary",error:error.message})
    }
}

let deleteSal= async(req,res)=>{
    let id=req.params._id;
 try {
    await Salary.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Salary deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateSal =async(req,res)=>{
    let {employee,month,year,salaryAmt,paidAmt,dueSalary,payMethod,payDate,notes}=req.body
    let id= req.params._id;
    try {
        let update= await Salary.findByIdAndUpdate({_id:id},{$set:{employee,month,year,salaryAmt,paidAmt,dueSalary,payMethod,payDate,notes}},{new:true})
        res.status(200).json({success:true,msg:"Salary updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating Salary",error:error.message})
    }
}

const getAllSal= async(req,res)=>{
    
    try {
        let allList= await Salary.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all all salaries list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no salary list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching salarylist"})
    }
}

module.exports={
   createSal,
   deleteSal,
   updateSal,
    getAllSal
}