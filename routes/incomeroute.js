const express= require ('express');
const { updateIncome, deleteIncome, getAllIncome, singleIncome, createIncome } = require('../controller/accBank/income');
const router = express.Router()

router.post('/create',createIncome)
router.put('/update/:id',updateIncome)
router.delete('/delete/:id',deleteIncome)
router.get('/getAllIncome',getAllIncome)
router.get('/singleIncome',singleIncome)


module.exports= router;