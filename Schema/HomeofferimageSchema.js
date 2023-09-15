const mongoose=require("mongoose")
const schema=mongoose.Schema

const offerimage=new schema({
    offerimage_url:{
        type:String,
        required:true
    },
    image_id:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Homeofferimage",offerimage)