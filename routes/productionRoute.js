const express= require ('express');
const { createProduction, loginProduction, deleteProduction, updateProduction, getAllProduction } = require('../controller/userManagement/productionController');
const router = express.Router()

router.post('/register',createProduction)
router.post('/login',loginProduction)
router.delete('/delete/:id',deleteProduction)
router.put('/update/:id',updateProduction)
router.get('/getAllProduction',getAllProduction)


module.exports= router;