require('dotenv').config() // it will transfer it to your os 
const app=require("./app");
const connect=require("./db/mongodb");
const {Createconnection}=require("./db/mysql");

const URL="mongodb+srv://logan:eQRaHuURtx40mcuW@cluster0.hbpq6ge.mongodb.net/sepoct?retryWrites=true&w=majority"

const port=process.env.PORT // form your os env

connect(URL).then(data=>{
    app.listen(port,()=>{
        console.log(`Database Connected ,Server Running On Port`,port)
    })
}).catch(err=>{
    console.log("Error Connecting to the database");
})


Createconnection().then(data=>{
 console.log("Connected with mysql")
}).catch(err=>{
  console.log(err);
})

