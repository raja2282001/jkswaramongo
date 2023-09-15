const express=require("express")
const router=express.Router()

const offerimagecontroller=require("../Controller/HomeofferimageController")

router.get("/find",offerimagecontroller.getallofferimage)
router.get("/find/:id",offerimagecontroller.getofferimage)
router.post("/add",offerimagecontroller.addofferimage)
router.put("/update/:id",offerimagecontroller.updateofferimage)
router.delete("/delete/:id",offerimagecontroller.deleteofferimage)

module.exports=router