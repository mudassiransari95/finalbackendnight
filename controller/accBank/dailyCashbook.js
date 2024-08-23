let DailyCashbook= require('../../models/accountbank/DailyCashbook')
const bcrypt= require('bcrypt')

const createDailyCashbook= async(req,res)=>{
    let {date,recievablePaymentPurpose,cvDvNumber,type,debitAmt,creditAmt,billAmt,billDate,remark,dueBill,billNo}= req.body
    try {
       
         newDailyCashbook= await new DailyCashbook({
      date: date,
      recievablePaymentPurpose: recievablePaymentPurpose,
      cvDvNumber: cvDvNumber,
      type: type,
      debitAmt:debitAmt,
      creditAmt:creditAmt,
      billAmt: billAmt,
      billDate: billDate,
      remark:remark,
      dueBill:dueBill,
      billNo: billNo
        }) 
        
        await newDailyCashbook.save()
          res.status(200).json({success:true,msg:"DailyCashbook created",newDailyCashbook})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteDailyCashbook= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await DailyCashbook.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"DailyCashbook deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateDailyCashbook =async(req,res)=>{
    let {date,recievablePaymentPurpose,cvDvNumber,type,debitAmt,creditAmt,billAmt,billDate,remark,dueBill,billNo}=req.body
    let id= req.params.id;
    try {
        let list= await DailyCashbook.findByIdAndUpdate({_id:id},{$set:{date,recievablePaymentPurpose,cvDvNumber,type,debitAmt,creditAmt,billAmt,billDate,remark,dueBill,billNo}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleDailyCashbook= async(req,res)=>{
    let _id= req.params._id;
    try {
        let DailyCashbook= await DailyCashbook.findById(_id)
        res.status(200).json({success:true,msg:"single DailyCashbook detail fetched successfully",DailyCashbook})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllDailyCashbook= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await DailyCashbook.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all DailyCashbook list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createDailyCashbook,
    deleteDailyCashbook,
    updateDailyCashbook,
    singleDailyCashbook,
    getAllDailyCashbook
}