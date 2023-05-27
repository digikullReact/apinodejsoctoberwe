const mongoose=require("mongoose");
const { Schema } = mongoose;

// This schema is just a represenation of how your document or the data.
// in mongodb will look like

const userSchema = new Schema({
    userName:{
      
        type:String
    },
    name:{
        unique:true,
        type:String
    },
    age:Number,
    password:{
        type:String
    }
 
});

// so the model below is the actual entity on which we will perform the 
//operation 

const User = mongoose.model('User',userSchema);

module.exports=User;
