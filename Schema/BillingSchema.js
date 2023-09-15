const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Billing=new Schema({
    Full_Name:{
        type:String,
        required:true
    },
    
    Street_address:{
        type:String,
        required:true
    },
    Town_City_State:{
        type:String,
        required:true
    },
    // State:{
    //     type:String,
    //     required:true
    // },
    Phone:{
        type:String,
        required:true
    },
    Pin_code:{
        type:String,
        required:true
    },
    Total_Price:{
        type:String,
        required:true
    },
    Payment_method:{
        type:String,
        required:true
    },
    Payment_progress:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    // user_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users',
    //     // required: true,
    // },
    order_data_time:{
        type:String,
    }
},
)

module.exports = mongoose.model('billing',Billing)
