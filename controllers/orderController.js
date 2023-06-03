const {saveOrder,calculateTotalOrderPrice,calculateMax}=require("../db/db");

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
        calculateMax().then(max=>{
            res.json({
                message:"success",
                data,
                max
            })

        })
       
    }).catch(err=>{
        next(err);
    })

}

module.exports={
    placeOrder,
    getTotalOrderAmount

}