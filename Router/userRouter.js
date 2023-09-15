const express=require("express")
const router=express.Router()
const usercontroller=require('../Controller/UserController')

router.get('/find',usercontroller.getalluser)
// router.post('/add',usercontroller.adduser)
router.post('/add',usercontroller.registerUser)

router.get('/find/:id',usercontroller.getuser)
router.put('/update/:id',usercontroller.updateuser)
router.delete('/delete/:id',usercontroller.deletuser)
router.post("/login",usercontroller.login)
router.post("/forget",usercontroller.forgotPassword)
router.post("/ser",usercontroller.searchuser)
// router.post("/Logins",usercontroller.Login)
// <<<<<<< HEAD
module.exports=router
// =======
// module.exports=router
// >>>>>>> 9201e9725afde5e13271f34939816d8c46e6121a
