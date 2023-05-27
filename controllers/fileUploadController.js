const fileUploads=[]
const {uploadToCloudinary}=require("../services/cloudinaryservice");
const {fileUploadS3}=require("../services/s3service");
const fileUpload=(req,res,next)=>{

    // We will upload our file
    uploadToCloudinary(req.files.file.path).then(data=>{


    res.json({
        message:"File Upload Success",
        fileLink:data
    })

    }).catch(err=>{
        next(err.toString());
        
    })



}


const S3fileUpload=(req,res,next)=>{


   console.log(req.file);
   // console.log( req.file.originalname.split("."))
    fileUploadS3(req.file).then(data=>{


   res.json({
    message:"Success",
    data
   })


    })
   // console.log(req.files);


}

const GetUploads=(req,res)=>{

    // We will upload our file

    //console.log(req.files);

    res.json({
        data:fileUploads
    })

}

module.exports={
    fileUpload,
    S3fileUpload
}

// Push the file in the upload folder
// show the files in frontend

// then when user click on the file it should open it in new tab