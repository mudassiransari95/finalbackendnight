const express= require ('express');
const { createAccountant, loginAccountant, deleteAccountant, updateAccountant, getAllAccountant } = require('../controller/userManagement/accountantController');
const router = express.Router()

router.post('/register',createAccountant)
router.post('/login',loginAccountant)
router.delete('/delete/:id',deleteAccountant)
router.put('/update/:id',updateAccountant)
router.get('/getAllAcc',getAllAccountant)


module.exports= router;