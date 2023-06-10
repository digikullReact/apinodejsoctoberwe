const express=require("express");
const router=express.Router();
const {getUserData,getUserbyIdController,updateUserById, updateUserByIdAndUserName, deleteByUserById, getUserDataPaginated, insertUserData}=require("../controllers/mysqlUserController");

const {checkAuthorization,encryptPassword}=require("../middlewares/middleware");

// This is a routes level middleware  and all the routes defined in this file
// will be   protected by this middleware
//router.use(checkAuthorization)
// Pagination  For   Api --->

router.post("/",insertUserData)

router.get("/pagination",getUserDataPaginated)
router.get("/",getUserData)
router.get("/:id",getUserbyIdController)
router.put("/:id",updateUserById)
//router.put("/:id",encryptPassword,updateUserById)
router.delete("/:id",encryptPassword,deleteByUserById)

router.put("/username/:id",encryptPassword,updateUserByIdAndUserName)











module.exports=router