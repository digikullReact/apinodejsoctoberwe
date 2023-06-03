const express=require("express");
const router=express.Router();
const {placeOrder,getTotalOrderAmount}=require("../controllers/orderController");

router.post("/",placeOrder)
router.get("/total",getTotalOrderAmount)


module.exports=router;