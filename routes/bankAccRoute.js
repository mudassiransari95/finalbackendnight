const express= require ('express');
const{ getAllBank, updateBank, deleteBank, singleBank, createNewBank }=require('../controller/accBank/bankAcc')
const router = express.Router()

router.post('/create',createNewBank)
router.put('/update/:id',updateBank)
router.delete('/delete/:id',deleteBank)
router.get('/getAllBank',getAllBank)
router.get('/singleBank',singleBank)


module.exports= router;