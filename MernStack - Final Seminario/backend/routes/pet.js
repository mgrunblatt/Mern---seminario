const router = require('express').Router();

const {getPets, createPet, getPet, deletePet} = require('../controllers/pet.controller')

router.route('/')
    .get(getPets)

router.route('/add')
    .post(createPet)
    
router.route('/:id')
    .get(getPet)
    .delete(deletePet)

module.exports = router;