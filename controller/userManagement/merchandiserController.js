let Merchandiser= require('../../models/userManage/Merchandiser')
const bcrypt= require('bcrypt')

let createMerchandiser= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let merchandiser= await Merchandiser.findOne({email:email});
        if(!merchandiser){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         merchandiser= await new Merchandiser({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await merchandiser.save()
         return res.status(200).json({success:true,msg:"Merchandiser created successfully",merchandiser})
    }
    else{
        return res.status(200).json({success:true,msg:"Merchandiser already exists"})
    }
    } catch (error) {
        // res.send("error in creating Merchandiser")
        return res.status(500).json({ success:false,msg:"error in register Merchandiser",error:error.message})
    }
}

let loginMerchandiser= async(req,res)=>{
    let {email,password}= req.body
  try {
      let merchandiser= await Merchandiser.findOne({email:req.body.email})
      if (merchandiser) {
        let comparePassword= bcrypt.compareSync(password,merchandiser.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"Merchandiser logged in successfully",merchandiser})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or Merchandiser not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in Merchandiser"})
  }

}

let deleteMerchandiser= async(req,res)=>{
    let id=req.params.id;
 try {
    await Merchandiser.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"merchandiser deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateMerchandiser =async(req,res)=>{
    let {name,email,username,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Merchandiser.findByIdAndUpdate({_id:id},{$set:{name,email,username,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"merchandiser updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating merchandiser",error:error.message})
    }
}

const getAllMerchandiser= async(req,res)=>{
    
    try {
        let allList= await Merchandiser.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allMerchandiser list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allMerchandiser list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allMerchandiser"})
    }
}

module.exports={
   createMerchandiser,
   loginMerchandiser,
   updateMerchandiser,
   deleteMerchandiser,
   getAllMerchandiser
}