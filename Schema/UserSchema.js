const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    user_name:{
        type:String
    },
    user_email:{
        type:String,
        unique:true,
        require:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_mobile_Number:{
        type:String,

    },
    user_address:{
        type:String,

    }
})

module.exports = mongoose.model('users',UserSchema)
