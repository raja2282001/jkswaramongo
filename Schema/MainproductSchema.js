const mongoose=require("mongoose")
const schema=mongoose.Schema

const mainproductschema=new schema({
    product_id:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("mainproduct",mainproductschema)