let Commercial= require('../../models/userManage/Commercial')
const bcrypt= require('bcrypt')

let createCommercial= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let commercial= await Commercial.findOne({email:email});
        if(!commercial){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         commercial= await new Commercial({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await commercial.save()
         return res.status(200).json({success:true,msg:"commercial created successfully",commercial})
    }
    else{
        return res.status(200).json({success:true,msg:"commercial already exists"})
    }
    } catch (error) {
        // res.send("error in creating commercial")
        return res.status(500).json({ success:false,msg:"error in register commercial",error:error.message})
    }
}

let loginCommercial= async(req,res)=>{
    let {email,password}= req.body
  try {
      let commercial= await Commercial.findOne({email:req.body.email})
      if (commercial) {
        let comparePassword= bcrypt.compareSync(password,commercial.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"commercial logged in successfully",commercial})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or commercial not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in commercial"})
  }

}

let deleteCommercial= async(req,res)=>{
    let id=req.params.id;
 try {
    await Commercial.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"commercial deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateCommercial =async(req,res)=>{
    let {name,email,username,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Commercial.findByIdAndUpdate({_id:id},{$set:{name,email,username,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"commercial updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating commercial",error:error.message})
    }
}

const getAllCommercial= async(req,res)=>{
   
    try {
        let allList= await Commercial.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allcommercial list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allcommercial list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allcommercial"})
    }
}

module.exports={
   createCommercial,
   loginCommercial,
   updateCommercial,
   deleteCommercial,
   getAllCommercial
}