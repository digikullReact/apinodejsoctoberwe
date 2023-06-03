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
router.post("/s3",upload,S3fileUpload);

router.get("/fileRedirect/:fileName",(req,res)=>{
    const fileName=req.params.fileName;
    // You have send some kind of html prompt or something

    // this will prompt the user for the pass word --->
    res.send(`

    <html>
      <form method="post" action="/uploads/fileDownload/${fileName}"  >

      <input name="password" type="text"/>
      
      <button type="submit">Download File</button>


      </form>

    </html>
    
    
    `)


    //res.redirect(`/uploads/fileDownload/${fileName}`)
  

})

// this will be renderring the file

router.post("/fileDownload/:fileName",(req,res)=>{
    console.log(req.body);

    if(req.body.password=="hello"){
        const fileName=req.params.fileName;
        res.sendFile( `${path.join(__dirname,"../uploads",fileName)}`)
        return 
    }
  
    res.send("Unauthorized");

    return 
})






module.exports=router