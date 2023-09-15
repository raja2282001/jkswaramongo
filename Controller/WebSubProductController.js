const SubProductSchema = require("../Schema/WebSubProductSchema");

const getallsubproduct=(req,res)=>{
    SubProductSchema.find((err,subproducts)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting subproducts",
                err:err
            })
        }
        else{
            if(subproducts==null || subproducts==undefined || subproducts.length==0){
                res.status(404).json({
                    message:"subProducts not found",
                })
            }
            else{
                res.status(202).json({
                    message:"subProducts fetched successfully",
                    subproduct_data:subproducts
                })
            }

        }

    })
}
const getsubproduct=(req,res)=>{

    const id = req.params.id
    SubProductSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for find  subproduct"
            })
        }
        else{
            res.status(202).json({
                message:"successfully find subproduct",
                subproduct_data:data
            })
        }
    })
}

const addsubproduct=(req,res)=>{
    console.log(req.body)

    const subproduct=new SubProductSchema(req.body)

    subproduct.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error in saving subproduct",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"subProduct saved successfully",
                subproduct_data:data
            })
        }


    })
}

const deleatesubproduct=(req,res)=>{
    const id = req.params.id

    SubProductSchema.findByIdAndDelete(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in deleting subproduct",
                err:err
            })
        }
        else{
            if(product==null || product==undefined || product.length==0){
                res.status(404).json({
                    message:"subProduct not found",
                })
            }
            else{
                res.status(200).json({
                    message:"subProduct deleted successfully",
                    subproduct_data:product
                })
            }
        }


    })
}


const updatesubproduct=(req,res)=>{
    const id=req.params.id
    SubProductSchema.findByIdAndUpdate(id,(err,product)=>{
        if(err){
            res.status(404).json({
                message:"err for updatesubproduct"
            })
        }
        else{
            res.status(202).json({
                message:"subProduct updates successfully"
            })
        }
    })
}
module.exports={
    getallsubproduct,
    getsubproduct,
    addsubproduct,
    deleatesubproduct,
    updatesubproduct
}