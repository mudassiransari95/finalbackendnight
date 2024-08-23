let Accountant= require('../../models/userManage/Accountant')
const bcrypt= require('bcrypt')

let createAccountant= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let accountant= await Accountant.findOne({email:email});
        if(!accountant){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         accountant= await new Accountant({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await accountant.save()
         return res.status(200).json({success:true,msg:"Accountant created successfully",Accountant})
    }
    else{
        return res.status(200).json({success:true,msg:"Accountant already exists"})
    }
    } catch (error) {
        // res.send("error in creating Accountant")
        return res.status(500).json({ success:false,msg:"error in register Accountant",error:error.message})
    }
}

let loginAccountant= async(req,res)=>{
    let {email,password}= req.body
  try {
      let accountant= await Accountant.findOne({email:req.body.email})
      if (accountant) {
        let comparePassword= bcrypt.compareSync(password,accountant.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"Accountant logged in successfully",accountant})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or Accountant not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in Accountant"})
  }

}

let deleteAccountant= async(req,res)=>{
    let id=req.params.id;
 try {
    await Accountant.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Accountant deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateAccountant =async(req,res)=>{
    let {name,email,username,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Accountant.findByIdAndUpdate({_id:id},{$set:{name,email,username,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"Accountant updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating Accountant",error:error.message})
    }
}

const getAllAccountant= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allList= await Accountant.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allAccountant list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allAccountant list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allAccountant"})
    }
}

module.exports={
   createAccountant,
   loginAccountant,
   updateAccountant,
   deleteAccountant,
   getAllAccountant
}