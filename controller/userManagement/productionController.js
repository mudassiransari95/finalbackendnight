let Production= require('../../models/userManage/Production')
const bcrypt= require('bcrypt')

let createProduction= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let production= await Production.findOne({email:email});
        if(!production){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         production= await new Production({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image,
         
        })
        await production.save()
         return res.status(200).json({success:true,msg:"Production created successfully",production})
    }
    else{
        return res.status(200).json({success:true,msg:"Production already exists"})
    }
    } catch (error) {
        // res.send("error in creating Production")
        return res.status(500).json({ success:false,msg:"error in register Production",error:error.message})
    }
}

let loginProduction= async(req,res)=>{
    let {email,password}= req.body
  try {
      let production= await Production.findOne({email:req.body.email})
      if (production) {
        let comparePassword= bcrypt.compareSync(password,production.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"Production logged in successfully",production})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or Production not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in Production"})
  }

}

let deleteProduction= async(req,res)=>{
    let id=req.params.id;
 try {
    await Production.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Production deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateProduction =async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image,unit,price,description}=req.body
    let id= req.params.id;
    try {
        let update= await Production.findByIdAndUpdate({_id:id},{$set:{name,email,userName,password,phone,confirmPassword,image,unit,price,description}},{new:true})
        res.status(200).json({success:true,msg:"Production updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating Production",error:error.message})
    }
}

const getAllProduction= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allList= await Production.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allProduction list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allProduction list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allProduction"})
    }
}

module.exports={
   createProduction,
   loginProduction,
   updateProduction,
   deleteProduction,
   getAllProduction
}