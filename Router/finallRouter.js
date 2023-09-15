const express=require("express")
const router=express.Router()
const billingController=require("../Controller/finallcontroller")


router.get("/find",billingController.getAllbilling)
router.post("/Billfind",billingController.getbillingById)
router.post("/add",billingController.addbilling)
router.delete("/delete/:id",billingController.deletebilling)
router.put("/update",billingController.updateBilling)

module.exports=router