const router = require('express').Router();

const {getProducts, createProducts, getProduct, deleteProduct, updateProduct} = require('../controllers/products.controller')

router.route('/')
    .get(getProducts)

router.route('/add')
    .post(createProducts)    
    
router.route('/:id')
    .get(getProduct)
    .delete(deleteProduct)

router.route('/update/:id')
    .put(updateProduct)

module.exports = router;