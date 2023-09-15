const express = require('express')
const router = express.Router()
const productController = require('../Controller/ProductController')

router.post('/add',productController.addProduct)
router.get('/find',productController.getAllProducts)
// router.get('/productc',productController.getProductsWithCat)
router.get('/find/:product_id',productController.getProductById)
router.delete('/delete/:id',productController.deleteProducts)
router.put('/update/:id',productController.updateProduct)
router.post("/ser",productController.searchproduct)
router.delete("/deleteField/:id",productController.deleteFieldFromProduct)

module.exports = router