const express= require ('express');
const { createBuyer, loginBuyer, deleteBuyer, updateBuyer, getAllBuyer } = require('../controller/userManagement/buyerController');
const router = express.Router()

router.post('/register',createBuyer)
router.post('/login',loginBuyer)
router.delete('/delete/:id',deleteBuyer)
router.put('/update/:id',updateBuyer)
router.get('/getAllBuyer',getAllBuyer)


module.exports= router;