const express=require("express")
const router=express.Router()

const subproductcontroller=require("../Controller/WebSubProductController")

router.get("/find",subproductcontroller.getallsubproduct)
router.get("/find/:id",subproductcontroller.getsubproduct)
router.post("/add",subproductcontroller.addsubproduct)
router.delete("/delete/:id",subproductcontroller.deleatesubproduct)
router.put("/update/:id",subproductcontroller.updatesubproduct)

module.exports=router