const express= require ('express');
const { updateDailyCashbook, deleteDailyCashbook, getAllDailyCashbook, singleDailyCashbook, createDailyCashbook } = require('../controller/accBank/dailyCashbook');
const router = express.Router()

router.post('/create',createDailyCashbook)
router.put('/update/:id',updateDailyCashbook)
router.delete('/delete/:id',deleteDailyCashbook)
router.get('/getAllDailyCashbook',getAllDailyCashbook)
router.get('/singleDailyCashbook',singleDailyCashbook)


module.exports= router;