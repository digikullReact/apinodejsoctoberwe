const express=require("express");
const router=express.Router();
const {fileUpload,S3fileUpload}=require("../controllers/fileUploadController");
const  multipart = require('connect-multiparty');
const path=require("path");
const multer = require('multer')


const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '')
    }
})

const upload = multer({storage}).single('file')



const  multipartMiddleware = multipart({ uploadDir: `${path.join(__dirname,"../uploads")}` });



router.post("/",multipartMiddleware,fileUpload)
router.post("/s3",upload,S3fileUpload)





module.exports=router