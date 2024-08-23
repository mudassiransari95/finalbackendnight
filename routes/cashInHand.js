const express= require ('express');

const { createAdjustCash, updateCash, deleteCash, getAllCash, singleCash } = require('../controller/accBank/cashInHand');
const router = express.Router()

router.post('/create',createAdjustCash)
router.put('/update/:id',updateCash)
router.delete('/delete/:id',deleteCash)
router.get('/getAllCash',getAllCash)
router.get('/singleCash',singleCash)


module.exports= router;