const express= require ('express');
const{ createSal, deleteSal, updateSal, getAllSal }=require('../controller/hrm/salaries')
const router = express.Router()

router.post('/create',createSal)
router.delete('/delete/:id',deleteSal)
router.put('/update/:id',updateSal)
router.get('/getAllSal',getAllSal)


module.exports= router;