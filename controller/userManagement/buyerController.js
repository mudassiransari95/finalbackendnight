let Buyer= require('../../models/userManage/Buyer')
const bcrypt= require('bcrypt')

let createBuyer= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let buyer= await Buyer.findOne({email:email});
        if(!buyer){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         buyer= await new Buyer({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await buyer.save()
         return res.status(200).json({success:true,msg:"buyer created successfully",buyer})
    }
    else{
        return res.status(200).json({success:true,msg:"buyer already exists"})
    }
    } catch (error) {
        // res.send("error in creating buyer")
        return res.status(500).json({ success:false,msg:"error in register buyer",error:error.message})
    }
}

let loginBuyer= async(req,res)=>{
    let {email,password}= req.body
  try {
      let buyer= await Buyer.findOne({email:req.body.email})
      if (buyer) {
        let comparePassword= bcrypt.compareSync(password,buyer.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"buyer logged in successfully",buyer})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or buyer not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in buyer"})
  }

}

let deleteBuyer= async(req,res)=>{
    let id=req.params.id;
 try {
    await Buyer.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"buyer deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateBuyer =async(req,res)=>{
    let {name,email,username,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Buyer.findByIdAndUpdate({_id:id},{$set:{name,email,username,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"buyer updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating buyer",error:error.message})
    }
}

const getAllBuyer= async(req,res)=>{
   
    try {
        let allList= await Buyer.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allBuyer list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allBuyer list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allBuyer"})
    }
}

module.exports={
   createBuyer,
   loginBuyer,
   updateBuyer,
   deleteBuyer,
   getAllBuyer
}