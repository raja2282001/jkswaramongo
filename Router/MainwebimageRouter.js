const express=require("express")
const router=express.Router()

const maiwebimagecontroller=require("../Controller/MainwebimageController")

router.post('/add',maiwebimagecontroller.addmainProduct)
router.get('/find',maiwebimagecontroller.getAllmainProducts)
// router.get('/productc',maiwebimagecontroller.getProductsWithCat)
router.get('/find/:id',maiwebimagecontroller.getmainProductById)
router.delete('/delete/:id',maiwebimagecontroller.deletemainProducts)
router.put('/update/:id',maiwebimagecontroller.updatemainProduct)

module.exports=router