const mongoose=require("mongoose")
const Schema=mongoose.Schema

const contactschem=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("contact",contactschem)