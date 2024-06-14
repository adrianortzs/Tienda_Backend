const express = require('express')
const {showProducts, showProductById, showProductsAdmin, showProductByIdAdmin, createProduct, showNewProductForm, showEditProductForm, updateProduct, deleteProduct, showFilteredProducts} = require('../controllers/productControllers')

const router = express.Router()

//public
router.get('/products', showProducts)
router.get('/products/:productId', showProductById)
router.get('/filteredProducts', showFilteredProducts)

//admin
router.get('/dashboard', showProductsAdmin)
router.get('/dashboard/new', showNewProductForm)
router.get('/dashboard/:productId', showProductByIdAdmin)
router.post('/dashboard', createProduct)
router.get('/dashboard/:productId/edit', showEditProductForm)
router.put('/dashboard/:productId', updateProduct)
router.delete("/dashboard/:productId/delete", deleteProduct)

module.exports = router