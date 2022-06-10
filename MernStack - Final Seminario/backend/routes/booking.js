const router = require('express').Router();

const {getBookings, createBooking, getBooking, updateBooking, deleteBooking} = require('../controllers/booking.controller')

router.route('/')
    .get(getBookings)

router.route('/add')
    .post(createBooking)
    
router.route('/:id')
    .get(getBooking)
    .delete(deleteBooking)

router.route('/update/:id')
.post(updateBooking)   

module.exports = router;