const {saveOrder,calculateTotalOrderPrice}=require("../db/db");

const placeOrder=(req,res,next)=>{

    saveOrder(req.body).then(data=>{
        res.json({
            message:"success",
            data
        })
    }).catch(err=>{
        next(err);
    })

}

const getTotalOrderAmount=(req,res,next)=>{

    calculateTotalOrderPrice(req.query.name).then(data=>{
        res.json({
            message:"success",
            data
        })
    }).catch(err=>{
        next(err);
    })

}

module.exports={
    placeOrder,
    getTotalOrderAmount

}