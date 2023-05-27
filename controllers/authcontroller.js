const {createUser, getUserByUsername}=require("../db/db");
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signup=(req,res,next)=>{

    const user=req.body;

   let result= createUser(user).then(result=>{
    res.json({
        status:"Success",
        messag:"User Created"

    })
   }).catch(err=>{

        // if you invoke next like this anywhere in your code 
    // it will just hit the error middlewar
   // throw new Error("Errorororo")

    next(new Error("User Already Exists"))


   })


   
}



const login=(req,res,next)=>{

    // You have to find the user by username from db
    console.log(req.body.userName)
    getUserByUsername(req.body.userName).then(user=>{
        if(user){
           // for the password comparison

           bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(!result){
                next(new Error("Please enter correct username or password"))
            }else{
                const  token = jwt.sign({username:req.body.userName}, process.env.JWTKEY);
            res.json({
                 status:"Success",
                 token:token,
                 message:"User Logged In"
         
             })
            }
        
        });

           
        }else{
            next("User Not found");
        }

    })

    // you have to check for the passwords

    // then you have to issue the token

    // issuing the jwt 
  



}

module.exports={
    signup,
    login
}