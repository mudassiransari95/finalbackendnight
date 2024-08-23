const express= require ('express');
const { loginAdmin, createAdmin, deleteAdmin, updateAdmin, getAllAdmin } = require('../controller/userManagement/adminController');
const router = express.Router()

router.post('/register',createAdmin)
router.post('/login',loginAdmin)
router.delete('/delete/:id',deleteAdmin)
router.put('/update/:id',updateAdmin)
router.get('/getAllAdmin',getAllAdmin)


module.exports= router;