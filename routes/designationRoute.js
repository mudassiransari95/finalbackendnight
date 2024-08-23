const express= require ('express');
const{ createDes, deleteDes, getAllDesignation, updateDes }=require('../controller/hrm/designation')
const router = express.Router()

router.post('/create',createDes)
router.delete('/delete/:id',deleteDes)
router.put('/update/:id',updateDes)
router.get('/getAllDes/:id',getAllDesignation)


module.exports= router;