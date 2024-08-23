const express= require ('express');
const { updateCredit, deleteCredit, getAllCredit, singleCredit, createCredit } = require('../controller/accBank/creditVoucher');
const router = express.Router()

router.post('/create',createCredit)
router.put('/update/:id',updateCredit)
router.delete('/delete/:id',deleteCredit)
router.get('/getAllCredit',getAllCredit)
router.get('/singleCredit',singleCredit)


module.exports= router;