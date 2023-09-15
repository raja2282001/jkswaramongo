const mongoose=require('mongoose')
const Schema=mongoose.Schema

const FileUploadSchema=new Schema({
    ImageName:{
        type:String,
        require:true
    },
    ImageSize:{
        type:Number,
    },
    ImageUrl:{
        type:String
    },
    ImageType:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Fileuplod',FileUploadSchema)