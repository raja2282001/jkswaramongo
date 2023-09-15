const productSchema =require("../Schema/ProductSchema")



// const getProductsWithCat = (req,res)=>{


//     productSchema.find().populate('category').exec((err,products)=>{
//         if(err){
//             res.status(500).json({
//                 message:"Error in getting products",
//                 err:err
//             })
//         }
//         else{
//             if(products!=null || products!=undefined || products.length!=0){
//                 res.status(200).json({
//                     message:"Products fetched successfully",
//                     products:products
//                 })
//             }
//             else{
//                 res.status(404).json({
//                     message:"Products not found",
//                 })
//             }

//         }

//     })




// }


const updateProduct=(req,res)=>{
    const id=req.params.id

    productSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for updateproduct",
                err:err
            })
        }
        else{
            res.status(202).json({
                message:"successfully updateproduct",
                product_data:data
            })
        }
    })

}

   


const deleteProducts = (req,res)=>{
    const id = req.params.id

    productSchema.findByIdAndDelete(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in deleting product",
                err:err
            })
        }
        else{
            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"Product deleted successfully",
                    product_data:product
                })
            }
            else{
                res.status(404).json({
                    message:"Product not found",
                })
            }
        }


    })




}

const getProductById = (req,res)=>{

    const product_id= req.params.product_id
    productSchema.findById(product_id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting product",
                err:err
            })
        }
        else{

            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"Product fetched successfully",
                    product_data:product
                })
            }
            else{
                res.status(404).json({
                    message:"Product not found",
                })
            }



        }



    })


}

const getAllProducts = (req,res)=>{

    productSchema.find((err,products)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting products",
                err:err
            })
        }
        else{
            if(products==null || products==undefined || products.length==0){
                res.status(404).json({
                    message:"Products not found",
                })
            }
            else{
                res.status(202).json({
                    message:"Products fetched successfully",
                    product1_data:products
                })
            }

        }

    })


}


const addProduct = (req,res)=>{

    const product = new productSchema(req.body)
    product.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error in saving product",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Product saved successfully",
                product_data:data
            })
        }
    })
}



//encrypt login
// const searchproduct=(req,res)=>{
//     const product_id=req.body.product_id
//     // const product_name=req.body.product_name
//     // const user_password=req.body.user_password

//         productSchema.find({product_id:product_id},(err,data)=>{
//             if(err){
//                 res.status(500).json({
//                     message:"err for faching product"
//                 })
//             }
//             else{
//                 if(data!=undefined && data!=null && data.length>0){
//                     res.status(200).json({
//                         message:"product found",
//                         product_data:data
//                     })
//                 }
//                 else{
//                     res.status(404).json({
//                         message:"product not found"
//                     })
//                 }
//             }
//         })
//     }
const searchproduct = (req, res) => {
    const product_id = req.body.product_id;

    productSchema.find({ product_id: product_id }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error fetching product",
                error: err
            });
        } else {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: "Product found",
                    product_data: data
                });
            } else {
                res.status(404).json({
                    message: "Product not found"
                });
            }
        }
    });
};


const deleteFieldFromProduct = (req, res) => {
    const id = req.params.id;
    const fieldToDelete = req.body.fieldName; // Assuming the field name is provided in the request body

    // Use the $unset operator to remove the specified field from the document
    productSchema.findByIdAndUpdate(id, { $unset: { [fieldToDelete]: 1 } }, { new: true }, (err, product) => {
        if (err) {
            res.status(500).json({
                message: "Error in deleting field from product",
                err: err
            });
        } else {
            if (product !== null && product !== undefined) {
                res.status(200).json({
                    message: "Field deleted from product successfully",
                    product_data: product
                });
            } else {
                res.status(404).json({
                    message: "Product not found",
                });
            }
        }
    });
};

module.exports ={
    addProduct,
    getAllProducts,
    getProductById,
    deleteProducts,
    updateProduct,
    searchproduct,
    deleteFieldFromProduct
    // getProductsWithCat
}
