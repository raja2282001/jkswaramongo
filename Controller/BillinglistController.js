// const BillingSchema = require("../Schema/BillingSchema")
const billing=require("../Schema/BilllistSchema")


const addbilllist=(req,res)=>{
    console.log(req.body)
    const bill=new billing(req.body)

    bill.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finding billing list"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add bill list data",
                bill_list:data
            })
        }
    })
}

const getAllbilllist = (req,res)=>{

    billing.find((err,products)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting bill list",
                err:err
            })
        }
        else{
            if(products==null || products==undefined || products.length==0){
                res.status(404).json({
                    message:"bill list is not found",
                })
            }
            else{
                res.status(202).json({
                    message:"bill list fetched successfully",
                    bill_list:products
                })
            }

        }

    })


}

const findebilllist=(req,res)=>{
    const id=req.body

    billing.findById().populate("billing").populate("Cart").exec(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finde bill list"
            })
        }
        else{
            res.status(202).json({
                message:"successfully find bill list",
                bill_list:data
            })
        }
    })
}


const searchbilllist = (req, res) => {
    const user_id = req.body.user_id;

    billing.find({ user_id: user_id }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error fetching userdata",
                error: err
            });
        } else {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: "user found",
                    user_id: data
                });
            } else {
                res.status(404).json({
                    message: "user not found"
                });
            }
        }
    });
};


const deletebilling=(req,res)=>{
    const id=req.params.id

    billing.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"err faching user"
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(500).json({
                    message:"err for deleate proccess"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully deleate data",
                    data
                })
            }
        }
    })
}
module.exports={
    addbilllist,
    getAllbilllist,
    findebilllist,
    searchbilllist,
    deletebilling
}