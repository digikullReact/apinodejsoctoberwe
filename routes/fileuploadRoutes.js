const express=require("express");
const router=express.Router();
const {fileUpload}=require("../controllers/fileUploadController");
const  multipart = require('connect-multiparty');
const path=require("path");

const  multipartMiddleware = multipart({ uploadDir: `${path.join(__dirname,"../uploads")}` });



router.post("/",multipartMiddleware,fileUpload)




module.exports=router