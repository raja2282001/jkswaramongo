const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer=require("multer")
const cors = require('cors')
const path=require("path")
const dotenv=require("dotenv").config()
const app = express()
const uplode=multer()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({express:true}))
app.use(uplode.array())
app.use(cors())
app.use(express.json())
const PORT = process.env.API_PORT
// const PORT = 6000

const ProudectRouter=require("./Router/ProductRouter")
const userRouter=require("./Router/userRouter")
const BillingRouter=require("./Router/BillingRouter")
const ContactRouter=require("./Router/ContactRouter")
const SubproductRouter=require("./Router/WebSubProductRouter")
const offerimagerouter=require("./Router/Offerimagerouter")
const addtocartrouter=require("./Router/CartRouter")
const mainProduct=require("./Router/mainproductRoute")
const FileuploadRouter=require("./Router/FileUploadRoutes")
const cartrouter=require("./Router/CartRouter")
const billlistrouter=require("./Router/billlistRouter")
const final=require("./Router/finallRouter")
const mainimage=require("./Router/MainwebimageRouter")
const homeofferimage=require("./Router/HomeofferimageRouter")
const homebaner=require("./Router/HomebanerRouter")
// const productss=require("./Schema/ProductSchema")
// app.post("/search/:key", async (req, res) => {
//     console.log(req.params.key);
//     let data = await productss.find(
//         {
//             "$or": [
//                 { "sub_product_Name": { $regex: new RegExp(req.params.key, "i") } },
//                 { "product_id": { $regex: new RegExp(req.params.key, "i") } }
//             ]
//         }
//     );
//     res.send({
//         message:"Product find successfully",
//         product_data:data
//     });
// });



// /
// /

// storage engine 

// storage engine 

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 9000000
//     }
// })
// app.use('/profile', express.static('upload/images'));
// app.post("/upload", upload.single('profile'), (req,res) => {

//     res.json({
//         success: 1,
//         profile_url: `https://jk-production-46f9.up.railway.app/profile/${req.file.filename}`
//     })
// })

// function errHandler(err, req, res, next) {
//     if (err instanceof multer.MulterError) {
//         res.json({
//             success: 0,
//             message: err.message
//         })
//     }
// }
// app.use(errHandler);
///


app.use("/product",ProudectRouter)
app.use("/user",userRouter)
app.use("/Billing",BillingRouter)
app.use("/contact",ContactRouter)
app.use("/subproduct",SubproductRouter)
app.use("/offerimage",offerimagerouter)
app.use("/cart",addtocartrouter)
app.use("/mainproduct",mainProduct)
app.use("/file",FileuploadRouter)
app.use("/cart",cartrouter)
app.use("/billlist",billlistrouter)
app.use("/final",final)
app.use("/mainimage",mainimage)
app.use("/homeoffer",homeofferimage)
app.use("/homebaner",homebaner)

mongoose.connect(`${process.env.MONGO_URL}`,{},(err)=>{
    if(err){
        console.log("error in db connections....")
    }
    else{
        console.log("db connected......")
    }
})


app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})
