const express= require ('express');
const { } = require('../controller/userManagement/merchandiserController');
const { loginMerchandiser, deleteMerchandiser, updateMerchandiser, getAllMerchandiser, createMerchandiser } = require('../controller/userManagement/merchandiserController');
const router = express.Router()

router.post('/register',createMerchandiser)
router.post('/login',loginMerchandiser)
router.delete('/delete/:id',deleteMerchandiser)
router.put('/update/:id',updateMerchandiser)
router.get('/getAllMerch',getAllMerchandiser)


module.exports= router;