const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');

// Configuration 
cloudinary.config({
    cloud_name: "dxd7hb0in",
    api_key: "469118755955873",
    api_secret: "yuicjyQduTpwgXnliPYsf5P9ESY"
  });
  



const uploadToCloudinary=(path)=>{

    return new Promise((res,rej)=>{
        cloudinary.uploader.upload(path, {public_id: uuidv4()}).then(data=>{
            res(data.secure_url);
          }).catch(err=>{
            rej(err);
          })

    })

 


}

module.exports={

    uploadToCloudinary
}