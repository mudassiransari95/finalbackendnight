let Employee= require('../../models/HRMmanagement/Employees')
const bcrypt= require('bcrypt')

const createEmp= async(req,res)=>{
    let {name,phone,email,address,gender,employmentType,birthDate,joiningDate,designation,salary,nidPassport,nidPassportBack}= req.body
    try {
       
         newEmp= await new Employee({
            name:name,
            phone:phone,
            email:email,
            address:address,
            gender:gender,
            employmentType:employmentType,
            birthDate:birthDate,
            joiningDate:joiningDate,
            designation:designation,
            salary:salary,
            nidPassport:nidPassport,
            nidPassportBack:nidPassportBack
            
        })
        
        await newEmp.save()
          res.status(200).json({success:true,msg:"Employee created",newEmp})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating Employee",error:error.message})
    }
}

let deleteEmp= async(req,res)=>{
    let id=req.params.id;
 try {
    await Employee.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Employee deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateEmp =async(req,res)=>{
    let {name,phone,email,address,gender,employmentType,birthDate,joiningDate,designation,salary,nidPassport,nidPassportBack}=req.body
    let id= req.params.id;
    try {
        let update= await Employee.findByIdAndUpdate({_id:id},{$set:{name,phone,email,address,gender,employmentType,birthDate,joiningDate,designation,salary,nidPassport,nidPassportBack}},{new:true})
        res.status(200).json({success:true,msg:"Employee updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating Employee",error:error.message})
    }
}

const getAllEmp= async(req,res)=>{
   
    try {
        let allList= await Employee.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allEmp list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allEmp list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allDes"})
    }
}

module.exports={
   createEmp,
   deleteEmp,
   updateEmp,
    getAllEmp
}