const express= require ('express');
const{ createAccessoryOrder, getAllAccessoryOrder, updateAccessoryOrder, deleteAccessoryOrder, singleAccessoryOrder }=require('../controller/inventory/accessoryOrder')
const router = express.Router()

router.post('/create',createAccessoryOrder)
router.put('/update/:id',updateAccessoryOrder)
router.delete('/delete/:id',deleteAccessoryOrder)
router.get('/getAllAccOrder',getAllAccessoryOrder)
router.get('/singleAccOrder',singleAccessoryOrder)


module.exports= router;