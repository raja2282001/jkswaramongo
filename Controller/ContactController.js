const contactSchem=require("../Schema/ContactSchema")


const addcontct=(req,res)=>{
    console.log(req.body)

    const contact=new contactSchem(req.body)
    contact.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add contact"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add contact",
                contct_data:data
            })
        }
    })
}

const getallcontact=(req,res)=>{
    contactSchem.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching contact"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(505).json({
                    message:"err for finding contact"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully find contact",
                    contct_data:data
                })
            }
        }
    })
}


const getcontact=(req,res)=>{
    const id=req.params.id
    contactSchem.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for find  contact"
            })
        }
        else{
            res.status(202).json({
                message:"successfully find contact",
                contct_data:data
            })
        }
    })
}

const updatecontact=(req,res)=>{
    const id=req.params.id

    contactSchem.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for  updatecontact"
            })
        }
        else{
            res.status(202).json({
                message:"successfully updatecontact",
                contct_data:data
            })
        }
    })
}

const deletedcontact=(req,res)=>{
    const id=req.params.id
    contactSchem.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for  deletedcontact"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deletedcontact",
                contct_data:data
            })
        }
    })
}


module.exports={
    addcontct,
    getallcontact,
    getcontact,
    deletedcontact,
    updatecontact,
}