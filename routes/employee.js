const express= require ('express');
const{ createEmp, deleteEmp, updateEmp, getAllEmp }=require('../controller/hrm/employee')
const router = express.Router()

router.post('/create',createEmp)
router.delete('/delete/:id',deleteEmp)
router.put('/update/:id',updateEmp)
router.get('/getAllEmp',getAllEmp)


module.exports= router;