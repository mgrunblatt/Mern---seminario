const router = require('express').Router();

const {getDays, createDay, getDay, updateDay, deleteDay} = require('../controllers/day.controller')

router.route('/')
    .get(getDays)

router.route('/add')
    .post(createDay)
    
router.route('/:id')
    .get(getDay)
    .delete(deleteDay)
 
router.route('/update/:id')
    .post(updateDay)    

module.exports = router;