const fileUploads=[]


const fileUpload=(req,res)=>{

    // We will upload our file


    res.json({
        message:"File Upload Success"
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