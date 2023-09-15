const finalSchema=require("../Schema/finallSchema")


const updateBilling = (req,res)=>{

    const _id = req.body._id

    finalSchema.findByIdAndUpdate(_id,req.body,(err,data)=>{


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
                    data:data
                })
            }
            }


    })



}



const deletebilling = (req,res)=>{
const id = req.params.id

finalSchema.findByIdAndDelete(id,(err,data)=>{

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
finalSchema.findById(id,(err,data)=>{

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

finalSchema.find((err,data)=>{

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


// const addbilling = (req, res) => {
//     // Extract the data from the request body
//     const {
//       Full_Name,
//       Street_address,
//       Town_City_State,
//       Phone,
//       Pin_code,
//       Total_Price,
//       Payment_method,
//       Payment_progress,
//       data,
//       user_id,
//     } = req.body;
  
//     // Create a new instance of the BillingModel with the extracted data
//     const newBillingData = new finalSchema({
//       Full_Name,
//       Street_address,
//       Town_City_State,
//       Phone,
//       Pin_code,
//       Total_Price,
//       Payment_method,
//       Payment_progress,
//       data,
//       user_id,
//     });
  
//     // Save the new billing data to the database
//     newBillingData.save((err, savedData) => {
//       if (err) {
//         res.status(500).json({
//           message: "Error in adding billing data",
//           error: err,
//         });
//       } else {
//         res.status(201).json({
//           message: "Billing data added successfully",
//           billingData: savedData,
//         });
//       }
//     });
//   };

const addbilling= (req,res)=>{

    const billing = new finalSchema(req.body)
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