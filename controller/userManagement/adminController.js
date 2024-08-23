let Auth= require('../../models/userManage/AdminModel')
const bcrypt= require('bcrypt')

let createAdmin= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let user= await Auth.findOne({name:name});
        if(!user){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         user= await new Auth({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            role:req.body.role,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await user.save()
         return res.status(200).json({success:true,msg:"user created successfully"})
    }
    else{
        return res.status(200).json({success:true,msg:"user already exists"})
    }
    } catch (error) {
        // res.send("error in creating user")
        return res.status(500).json({ success:false,msg:"error in register user",error:error.message})
    }
}

let loginAdmin= async(req,res)=>{
    let {name,password}= req.body
  try {
      let user= await Auth.findOne({name:req.body.name})
      if (user) {
        let comparePassword= bcrypt.compareSync(password,user.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"user logged in successfully",user})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or user not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in user"})
  }

}

let deleteAdmin= async(req,res)=>{
    let id=req.params.id;
 try {
    await Auth.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"admin deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateAdmin =async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Auth.findByIdAndUpdate({_id:id},{$set:{name,email,userName,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"admin updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating admin",error:error.message})
    }
}

const getAllAdmin= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allList= await Auth.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allAdmin list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allAdmin list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allAdmin"})
    }
}

module.exports={
    createAdmin,
    loginAdmin,
    deleteAdmin,
    updateAdmin,
    getAllAdmin
}