const billingSchem=require("../Schema/BillingSchema")


const updateBilling = (req,res)=>{

    const id = req.params.id

    billingSchem.findByIdAndUpdate(id,req.body,(err,data)=>{


            if(err){
                res.status(500).json({
                    message:"Error in updating billing details",
                    err:err
                })
            }
            else{
            if(data==null || data==undefined || data.length==0){
                res.status(404).json({
                    message:"billing details is not found",
                })
            }
            else{
                res.status(200).json({
                    message:"successfully Update billing details",
                    product_data:product
                })
            }
            }


    })



}



const deletebilling = (req,res)=>{
const id = req.params.id

billingSchem.findByIdAndDelete(id,(err,data)=>{

    if(err){
        res.status(500).json({
            message:"Error in deleting billing details",
            err:err
        })
    }
    else{
        if(data==null || data==undefined || data.length==0){
            res.status(404).json({
                message:"billing details not found",
            })
        }
        else{
            res.status(200).json({
                message:"billing details deleted successfully",
                Billing_data:data
            })
        }
    }


})




}

const getbillingById = (req,res)=>{

const id = req.params.id
billingSchem.findById(id,(err,data)=>{

    if(err){
        res.status(500).json({
            message:"Error in getting billing details",
            err:err
        })
    }
    else{

        if(data==null || data==undefined || data.length==0){
            res.status(404).json({
                message:"billing details not found",
            })
        }
        else{
            res.status(200).json({
                message:"billing details fetched successfully",
                Billing_data:data
            })
        }



    }



})


}

const getAllbilling = (req,res)=>{

billingSchem.find().exec((err,data)=>{

    if(err){
        res.status(500).json({
            message:"Error in getting billing details",
            err:err
        })
    }
    else{
        if(data==null || data==undefined || data.length==0){
            res.status(404).json({
                message:"billing details not found",
            })
        }
        else{
            res.status(202).json({
                message:"billing details fetched successfully",
                Billing_data:data
            })
        }

    }

})


}


const addbilling = (req,res)=>{

const billing = new billingSchem(req.body)
billing.save((err,data)=>{

    if(err){
        res.status(500).json({
            message:"Error in saving billing details",
            err:err
        })
    }
    else{
        res.status(201).json({
            message:"billing details saved successfully",
            Billing_data:data
        })
    }


})
}

module.exports={
    updateBilling,
    deletebilling,
    getbillingById,
    getAllbilling,
    addbilling
}