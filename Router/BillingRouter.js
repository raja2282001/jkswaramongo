const express=require("express")
const router=express.Router()
const billingController=require("../Controller/BillingController")


router.get("/find",billingController.getAllbilling)
router.post("/Billfind",billingController.getbillingById)
router.post("/add",billingController.addbilling)
router.delete("/delete/:id",billingController.deletebilling)
router.put("/update/:id",billingController.updateBilling)

module.exports=router