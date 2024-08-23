const express= require ('express');
const{ createBudget, deleteBudget, updateBudget, singleBudget, getAllBudget }=require('../controller/orderManagement/budgetList');

const router = express.Router()

router.post('/create',createBudget)
router.delete('/delete/:id',deleteBudget)
router.put('/update/:id',updateBudget)
router.get('/singleBudget/:id',singleBudget)
router.get('/getAllBudget',getAllBudget)


module.exports= router;