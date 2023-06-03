const express=require("express");
const app=express();
const authRouter=require("./routes/auth")
const userRouter=require("./routes/user")
const orderRoute=require("./routes/order");
const fileUploadRoputer=require("./routes/fileuploadRoutes");
const cors=require("cors");


const {errorMiddleware}=require("./middlewares/middleware");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));
app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/uploads",fileUploadRoputer)
app.use("/order",orderRoute)

// registering error middleware at the end
app.use(errorMiddleware)

module.exports=app;