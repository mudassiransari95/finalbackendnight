const express= require ('express');
const { createCommercial, loginCommercial, deleteCommercial, updateCommercial, getAllCommercial } = require('../controller/userManagement/commercialController');
const router = express.Router()

router.post('/register',createCommercial)
router.post('/login',loginCommercial)
router.delete('/delete/:id',deleteCommercial)
router.put('/update/:id',updateCommercial)
router.get('/getAllComm',getAllCommercial)


module.exports= router;