const express= require ('express');
const { updateDebit, deleteDebit, getAllDebit, singleDebit, createDebit } = require('../controller/accBank/debitVoucher');
const router = express.Router()

router.post('/create',createDebit)
router.put('/update/:id',updateDebit)
router.delete('/delete/:id',deleteDebit)
router.get('/getAllDebit',getAllDebit)
router.get('/singleDebit',singleDebit)


module.exports= router;