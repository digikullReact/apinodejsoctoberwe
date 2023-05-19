const fileUploads=[]
const {uploadToCloudinary}=require("../services/cloudinaryservice");

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

const GetUploads=(req,res)=>{

    // We will upload our file

    //console.log(req.files);

    res.json({
        data:fileUploads
    })

}

module.exports={
    fileUpload
}

// Push the file in the upload folder
// show the files in frontend

// then when user click on the file it should open it in new tab