const express= require ('express');
const { updatePartyLedger, deletePartyLedger, getAllPartyLedger, singlePartyLedger, createPartyLedger } = require('../controller/accBank/partyLedger');
const router = express.Router()

router.post('/create',createPartyLedger)
router.put('/update/:id',updatePartyLedger)
router.delete('/delete/:id',deletePartyLedger)
router.get('/getAllPartyLedger',getAllPartyLedger)
router.get('/singlePartyLedger',singlePartyLedger)


module.exports= router;