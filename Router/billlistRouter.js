const express = require('express');
const router = express.Router();

const billlistcontroller=require("../Controller/BillinglistController")

router.get("/find",billlistcontroller.getAllbilllist)
router.post("/add",billlistcontroller.addbilllist)
router.post("/findbill",billlistcontroller.findebilllist)
router.post("/ser",billlistcontroller.searchbilllist)
router.delete('/delete/:id',billlistcontroller.deletebilling)


module.exports=router