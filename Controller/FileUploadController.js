const path = require('path');
const multer = require('multer');
const express=require("express")
const FileUpload = require('../Schema/FileUplodSchema');

const storage = multer.diskStorage({
    destination: ".upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
    // filename: function(req, file, cb){
    //     cb(null,file.originalname);
    // }
})

const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize:9000000
        },
    }
).single("profile")

// app.use('/profile', express.static('upload/images'));
const uploadFile=(req, res)=>{

    console.log(req.file);
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({
                error: err,
                message: 'Error uploading file'
            });
        }
        else {
            console.log(req.file.originalname);
            //size
            console.log(req.file.size);
            //abs path
            console.log(req.file.path);
            var p = path.join(__dirname,'../uploads/' + req.file.originalname);
            console.log(p);

            //type
            if (req.file == undefined) {
                res.status(400).json({
                    message: 'No file selected'
                });
            }
            else {
                const fileUpload = new FileUpload({
                    ImageName: req.file.originalname,
                    ImageSize: req.file.size,
                    ImageUrl: `https://jk-production-46f9.up.railway.app/profile/${req.file.filename}`,
                    ImageType: req.file.mimetype,
                    userName: req.body.userName,
                });
                fileUpload.save((err, data) => {
                    if (err) {
                        res.status(500).json({
                            error: err,
                            message: 'Error uploading file to db'
                        });
                    }
                    else {
                        res.status(200).json({
                            message: 'File uploaded successfully',
                            file: req.file.originalname,
                            data: data
                        });
                    }
                });



                // res.status(200).json({
                //     message: 'File uploaded successfully',
                //     file: req.file.originalname
                // })
            }
        }

    });

}
const getallfile=(req,res)=>{
    FileUpload.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching file"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(503).json({
                    message:"err for finding file"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding file",
                    data:data
                })
            }
        }
    })
}
const deleatfile=(req,res)=>{
    const id=req.params.id

    FileUpload.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat file"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat file",
                data:data
            })
        }
    })
}
module.exports = {
    uploadFile,
    getallfile,
    deleatfile
}