const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ProductSchema=new Schema({
        product_id:{
            type:Number,
            required:true
        },
        sub_product_id:{
            type:String,
            required:true
        },
        product_name:{
            type:String,
            required:true
        },
        product_description:{
            type:String,
            require:true
        },
        product_price:{
            type:String,
            required:true
        },
        product_quality:{
            type:String,
            require:true
        },
        product_image_url:{
            type:String,
            require:true
        },
        product_background_img:{
            type:String,
            require:true
        },
        product_qty_type:{
            type:String,
            require:true
        },
        product_color:{
            type:String,
            require:true
        },
        // product_quantity:{
        //     type:String,
        //     require:true
        // },
        product_web_image:{
            type:String,
            require:true
        },
        product_detail1:{
            type:String,
            require:true
        },
        product_detail2:{
            type:String,
            require:true
        },
        product_detail3:{
            type:String,
            require:true
        },
        product_detail4:{
            type:String,
            require:true
        },
        product_web_color:{
            type:String
        },
        product_app_description:{
            type:String
        },
        product_category:{
            type:String
        }
})


module.exports = mongoose.model('Product',ProductSchema)
