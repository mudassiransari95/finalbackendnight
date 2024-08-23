const express= require ('express');
const { createUnit, updateUnitStatus, deleteUnit, editUnitDetails, getAllUnit } = require('../controller/inventory/createunit');
const router = express.Router()

router.post('/create',createUnit)
router.put('/update-status/:id',updateUnitStatus);
router.delete('/delete/:id', deleteUnit);
router.put('/edit/:id', editUnitDetails); 
router.get('/getAllUnit', getAllUnit);



module.exports= router;