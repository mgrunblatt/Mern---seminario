const router = require('express').Router();

const {getUsers, createUsers, getUser, deleteUser, updateUser} = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)

router.route('/add')
    .post(createUsers)    
    
router.route('/:id')
    .get(getUser)
    .delete(deleteUser)

router.route('/update/:id')
    .put(updateUser)

module.exports = router;