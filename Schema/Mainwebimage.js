const mongoose=require("mongoose")
const Schema=mongoose.Schema

const mainwebSchema=new Schema({
    product_image:{
        type:String,
        required:true
    },
    product_titel:{
        type:String,
        require:true
    },
    product_description:{
        type:String,
        require:true
    },
    product_color:{
        type:String,
        require:true
    },
})


module.exports=mongoose.model("mainwebimage",mainwebSchema)