const mongoose=require("mongoose");
const { Schema } = mongoose;

// This schema is just a represenation of how your document or the data.
// in mongodb will look like

const orderSchema = new Schema({
    userName:{
      
        type:String
    },
   
    totalAmount:Number,
    products:[String]
});

// so the model below is the actual entity on which we will perform the 
//operation 

const Order = mongoose.model('Order',orderSchema);

module.exports=Order;
