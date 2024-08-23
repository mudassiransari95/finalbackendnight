let Order= require('../../models/orderManage/OrderManagement')
const bcrypt= require('bcrypt')

const createOrder= async(req,res)=>{
    let {orderNo,image,party,merchandiser,gsm,shipMode,payMode,year,season,totalQty,totalUnitPrice,totalValue,status}= req.body
    try {
       
         newOrder= await new Order({
          orderNo: orderNo,
          image: image,
          party: party,
          merchandiser: merchandiser,
          gsm:gsm,
          shipMode: shipMode,
          payMode: payMode,
          year: year,
          season: season,
          totalQty: totalQty,
          totalUnitPrice: totalUnitPrice,
          totalValue: totalValue,
          status: status
        })
        
        await newOrder.save()
          res.status(200).json({success:true,msg:"Order created",newOrder})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

let deleteOrder= async(req,res)=>{
    let id=req.params._id;
 try {
    await Order.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Order deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}

const updateOrder =async(req,res)=>{
    let {orderNo,image,party,merchandiser,gsm,shipMode,payMode,year,season,totalQty,totalUnitPrice,totalValue,status}=req.body
    let id= req.params._id;
    try {
        let orderList= await Order.findByIdAndUpdate({_id:id},{$set:{orderNo,image,party,merchandiser,gsm,shipMode,payMode,year,season,totalQty,totalUnitPrice,totalValue,status}},{new:true})
        res.status(200).json({success:true,msg:"orderlist updated successfully",orderList})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating list",error:error.message})
    }
}

const singleOrder= async(req,res)=>{
    let _id= req.params._id;
    try {
        let Order= await Order.findById(_id)
        res.status(200).json({success:true,msg:"single Order detail fetched successfully",Order})
    } catch (error) {
        res.status(500).json({success:false,msg:"error in getting detail",error:error.message})
    }
}

const getAllOrder= async(req,res)=>{
    let _id= req.params._id;
    try {
        let allList= await Order.find({name:_id})
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all Order list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching all list"})
    }
}
const countorderdata=async(req,res)=>{
    try {
        const  count=await  Order.countDocuments()
        res.status(200).json({
            data:count,
            message:'data counted successfully',
            success:true,
            error:false
        }) 
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports={
    createOrder,
    deleteOrder,
    updateOrder,
    singleOrder,
    getAllOrder,
    countorderdata
}