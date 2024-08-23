const express= require ('express');
const {createOrder, deleteOrder, getAllOrder,countorderdata, updateOrder, singleOrder}=require('../controller/orderManagement/orderList')
const router = express.Router()

router.post('/create',createOrder)
router.delete('/delete/:_id',deleteOrder)
router.put('/update/:_id',updateOrder)
router.get('/singleOrder/:id',singleOrder)
router.get('/getAllOrder',getAllOrder)
router.get('/countorderdata',countorderdata)


module.exports= router;