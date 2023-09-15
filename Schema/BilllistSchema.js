const mongoose=require("mongoose")


const billingSchema= new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("/billlist",billingSchema)