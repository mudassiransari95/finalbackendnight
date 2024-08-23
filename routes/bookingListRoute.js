const express= require ('express');
// const{  }=require('../controller/BookingManagement/BookingList');
const { createBooking, deleteBooking, updateBooking, singleBooking, getAllBooking } = require('../controller/orderManagement/bookingList');
const router = express.Router()

router.post('/create',createBooking)
router.delete('/delete/:id',deleteBooking)
router.put('/update/:id',updateBooking)
router.get('/singleBooking/:id',singleBooking)
router.get('/getAllBooking',getAllBooking)


module.exports= router;