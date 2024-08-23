let Booking= require('../../models/orderManage/BookingList')
const bcrypt= require('bcrypt')

const createBooking= async(req,res)=>{
    let {orderNo,bookingDate,partyName,type,composition,orderImage,processLoss,otherFabric,rib,collar,preparedBy,status}= req.body
    try {
       
         newBooking= await new Booking({
         orderNo: orderNo,
         bookingDate: bookingDate,
         partyName: partyName,
         type: type,
         composition: composition,
         orderImage: orderImage,
         processLoss: processLoss,
         otherFabric: otherFabric,
         rib: rib,
         collar:collar,
         preparedBy: preparedBy,
         status: status
        })
        
        await newBooking.save()
          res.status(200).json({success:true,msg:"Booking created",newBooking})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteBooking= async(req,res)=>{
    let id=req.params._id;
 try {
    await Booking.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Booking deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateBooking =async(req,res)=>{
    let {orderNo,bookingDate,partyName,type,composition,orderImage,processLoss,otherFabric,rib,collar,preparedBy,status}=req.body
    let id= req.params._id;
    try {
        let bookingList= await Booking.findByIdAndUpdate({_id:id},{$set:{orderNo,bookingDate,partyName,type,composition,orderImage,processLoss,otherFabric,rib,collar,preparedBy,status}},{new:true})
        res.status(200).json({success:true,msg:"Bookinglist updated successfully",bookingList})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleBooking= async(req,res)=>{
    let _id= req.params._id;
    try {
        let booking= await Booking.findById(_id)
        res.status(200).json({success:true,msg:"single Booking detail fetched successfully",booking})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllBooking= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allList= await Booking.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Booking list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}

module.exports={
    createBooking,
    deleteBooking,
    updateBooking,
    singleBooking,
    getAllBooking
}