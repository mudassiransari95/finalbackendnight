let Debit= require('../../models/accountbank/DebitVoucher')
const bcrypt= require('bcrypt')

const createDebit= async(req,res)=>{
    let {selectParty,select,payMethod,debitVoucherNo,remark,billDate,debitAmt,particulars,paymentType}= req.body
    try {
       
         newDebit= await new Debit({
   selectParty: selectParty,
   select: select,
   payMethod: payMethod,
   debitVoucherNo: debitVoucherNo,
   remark: remark,
   billDate: billDate,
   debitAmt: debitAmt,
   particulars:particulars,
   paymentType: paymentType
        }) 
        
        await newDebit.save()
          res.status(200).json({success:true,msg:"Debit created",newDebit})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating debit",error:error.message})
    }
}

let deleteDebit= async(req,res)=>{
    console.log(req.params)
    let id=req.params.id;
 try {
    await Debit.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Debit deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateDebit =async(req,res)=>{
    let {selectParty,select,payMethod,debitVoucherNo,remark,billDate,debitAmt,particulars,paymentType}=req.body
    let id= req.params.id;
    try {
        let list= await Debit.findByIdAndUpdate({_id:id},{$set:{selectParty,select,payMethod,debitVoucherNo,remark,billDate,debitAmt,particulars,paymentType}},{new:true})
        res.status(200).json({success:true,msg:"list updated successfully",list})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleDebit= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Debit= await Debit.findById(_id)
        res.status(200).json({success:true,msg:"single Debit detail fetched successfully",Debit})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllDebit= async(req,res)=>{
    // let _id= req.params._id;
    try {
        let allList= await Debit.find() 
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Debit list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createDebit,
    deleteDebit,
    updateDebit,
    singleDebit,
    getAllDebit
}