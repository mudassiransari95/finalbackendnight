const express= require ('express');
const{ createAccessory, deleteAccessory, updateAccessory, singleAccessory, getAllAccessory }=require('../controller/inventory/accessoryListcontroller')
const router = express.Router()

router.post('/create',createAccessory)
router.delete('/delete/:id',deleteAccessory)
router.put('/update/:id',updateAccessory)
router.get('/singleAccessory/:id',singleAccessory)
router.get('/getAllAccessory',getAllAccessory)


module.exports= router;