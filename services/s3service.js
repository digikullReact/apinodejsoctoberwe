const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');



const s3 = new AWS.S3({
    accessKeyId: "AKIAS2LNCO4EXFTL4B7V",
    secretAccessKey: "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"
})

const fileUploadS3=(file)=>{

    // Writing out logic for file upload

    //console.log(file.buffer);

    const fileType=file.originalname.split(".")[1];

    const params = {
        Bucket: "nodefileupload122",
        Key: `${uuidv4()}.${fileType}`,
        Body: file.buffer
    }



    return new Promise((res,rej)=>{

        s3.upload(params,(err,result)=>{

            if(err){
                rej(err);
            }

           res(result)
    
        })

    })


  

}

module.exports={
    fileUploadS3
}