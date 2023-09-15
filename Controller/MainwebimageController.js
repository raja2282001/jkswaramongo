const MainwebSchema=require("../Schema/Mainwebimage")

const updatemainProduct=(req,res)=>{
    const id=req.params.id

    MainwebSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for updatemainproduct",
                err:err
            })
        }
        else{
            res.status(202).json({
                message:"successfully updatemainproduct",
                Main_product_data:data
            })
        }
    })

}

   


const deletemainProducts = (req,res)=>{
    const id = req.params.id

    MainwebSchema.findByIdAndDelete(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in deleting mainproduct",
                err:err
            })
        }
        else{
            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"mainProduct deleted successfully",
                    Main_product_data:product
                })
            }
            else{
                res.status(404).json({
                    message:"mainProduct not found",
                })
            }
        }


    })




}

const getmainProductById = (req,res)=>{

    const id = req.params.id
    MainwebSchema.findById(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting mainproduct",
                err:err
            })
        }
        else{

            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"mainProduct fetched successfully",
                    Main_product_data:product
                })
            }
            else{
                res.status(404).json({
                    message:"mainProduct not found",
                })
            }



        }



    })


}

const getAllmainProducts = (req,res)=>{

    MainwebSchema.find((err,products)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting mainproducts",
                err:err
            })
        }
        else{
            if(products==null || products==undefined || products.length==0){
                res.status(404).json({
                    message:"mainProducts not found",
                })
            }
            else{
                // res.status(202).json(
                //     products
                // )
                res.status(202).json({
                    message:"mainProducts fetched successfully",
                    Main_product_data:products
                })
            }

        }

    })


}


const addmainProduct = (req,res)=>{

    const product = new MainwebSchema(req.body)
    product.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error in saving mainproduct",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"mainProduct saved successfully",
                Main_product_data:data
            })
        }


    })
}



module.exports={
    updatemainProduct,
    addmainProduct,
    getAllmainProducts,
    getmainProductById,
    deletemainProducts,
    updatemainProduct
}