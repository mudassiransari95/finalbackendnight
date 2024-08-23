const express= require ('express');
const { updateExpense, deleteExpense, getAllExpense, singleExpense, createExpense } = require('../controller/accBank/expenses');
const router = express.Router()

router.post('/create',createExpense)
router.put('/update/:id',updateExpense)
router.delete('/delete/:id',deleteExpense)
router.get('/getAllExpense',getAllExpense)
router.get('/singleExpense',singleExpense)


module.exports= router;