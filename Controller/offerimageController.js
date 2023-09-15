const offerimageSchema = require("../Schema/offerimageSchema")

const addofferimage=(req,res)=>{
    console.log(req.body)

    const offer=new offerimageSchema(req.body)

    offer.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add offerimage"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add offerimage",
                offerimage_data:data
            })
        }
    })
}


const getallofferimage=(req,res)=>{
    offerimageSchema.find((err,data)=>{
        if(err){
            res.status(505).json({
                message:"err for faching offerimage"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"err for finding offerimage",
                    err:err
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding offerimage",
                    offerimage_data:data
                })
            }
        }
    })
}

const getofferimage=(req,res)=>{
    const id=req.params.id

    offerimageSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finding offerimage"
            })
        }
        else{
            res.status(202).json({
                message:"successfully finding offerimage",
                offerimage_data:data
            })
        }
    })
}

const updateofferimage=(req,res)=>{
    const id=req.params.id

    offerimageSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for updateofferimage"
            })
        }
        else{
            res.status(202).json({
                message:"successfully updateofferimage",
                offerimage_data:data
            })
        }
    })
}

const deleteofferimage=(req,res)=>{
    const id=req.params.id

    offerimageSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleteofferimage"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleteofferimage",
                offerimage_data:data
            })
        }
    })
}
module.exports={
    getallofferimage,
    getofferimage,
    addofferimage,
    deleteofferimage,
    updateofferimage
}