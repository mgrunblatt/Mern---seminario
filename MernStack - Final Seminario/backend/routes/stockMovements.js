const router = require('express').Router();

const {getStockMovements, createStockMovements, getStockMovement, deleteStockMovement} = require('../controllers/stockMovement.controller')

router.route('/')
    .get(getStockMovements)

router.route('/add')
    .post(createStockMovements)
    
router.route('/:id')
    .get(getStockMovement)
    .delete(deleteStockMovement)

    module.exports = router;