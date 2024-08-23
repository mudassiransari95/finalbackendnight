let Credit= require('../../models/accountbank/CreditVoucher')
const bcrypt= require('bcrypt')

const createCredit= async(req,res)=>{
    let {selectParty,select,payMethod,creditVoucherNo,remark,billDate,creditAmt,paymentType,transactionBy}= req.body
    try {
       
         newCredit= await new Credit({
      select: select,
      selectParty: selectParty,
      payMethod: payMethod,
      creditVoucherNo: creditVoucherNo,
      remark: remark,
      billDate: billDate,
      creditAmt: creditAmt,
      paymentType: paymentType,
      transactionBy: transactionBy
        }) 
        
        await newCredit.save()
          res.status(200).json({success:true,msg:"Credit created",newCredit})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteCredit= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Credit.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Credit deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateCredit =async(req,res)=>{
    let {selectParty,select,payMethod,creditVoucherNo,paymentType,transactionBy,remark,billDate,creditAmt}=req.body
    let id= req.params.id;
    try {
        let list= await Credit.findByIdAndUpdate({_id:id},{$set:{selectParty,paymentType,transactionBy,select,payMethod,creditVoucherNo,remark,billDate,creditAmt}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleCredit= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Credit= await Credit.findById(_id)
        res.status(200).json({success:true,msg:"single Credit detail fetched successfully",Credit})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllCredit= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Credit.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Credit list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createCredit,
    deleteCredit,
    updateCredit,
    singleCredit,
    getAllCredit
}