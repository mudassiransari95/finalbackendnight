const express= require ('express');
const { updateTransaction, deleteTransaction, getAllTransaction, singleTransaction, createTransaction } = require('../controller/accBank/monthlyTransaction');
const router = express.Router()

router.post('/create',createTransaction)
router.put('/update/:id',updateTransaction)
router.delete('/delete/:id',deleteTransaction)
router.get('/getAllTransaction',getAllTransaction)
router.get('/singleTransaction',singleTransaction)


module.exports= router;