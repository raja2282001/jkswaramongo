const express=require("express")
const router=express.Router()

const mainproductcontroller=require("../Controller/MainproductController")

router.post('/add',mainproductcontroller.addmainProduct)
router.get('/find',mainproductcontroller.getAllmainProducts)
// router.get('/productc',mainproductcontroller.getProductsWithCat)
router.get('/find/:id',mainproductcontroller.getmainProductById)
router.delete('/delete/:id',mainproductcontroller.deletemainProducts)
router.put('/update/:id',mainproductcontroller.updatemainProduct)

module.exports=router