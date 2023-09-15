const express=require("express")
const router=express.Router()

const Contactcontroller=require("../Controller/ContactController")

router.get("/find",Contactcontroller.getallcontact)
router.post("/add",Contactcontroller.addcontct)
router.get("/find/:id",Contactcontroller.getcontact)
router.delete("/delete/:id",Contactcontroller.getcontact)
router.put('/update/:id',Contactcontroller.updatecontact)


module.exports=router