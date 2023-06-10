const {selectData,insertData,updateData,deleteData}=require("../db/mysqldb");

const insertUserData=(req,res,next)=>{
    insertData(req.body.name,req.body.age).then(data=>{
        res.json({
            message:"Success",
            data:data
        })

    }).catch(err=>{
        next(err);
    })
}

const getUserData=(req,res,next)=>{

    selectData().then(users=>{
        res.json({
            message:"Success",
            data:users
        })

    }).catch(err=>{
       next(err);
    })

    



}

// Pagination Api

const getUserDataPaginated=(req,res,next)=>{

   // console.log(req.query)


    paginatedGet(req.query.limit,req.query.page,req.query.sortField,req.query.sortOrder,req.query.search).then(data=>{
       

        res.json({
            message:"Successiiiii",
            data
        })
       
    }).catch(err=>{
        next(err);
    })
   

   
   
   }



// should be protected api

// Create a  get user profile api ----> so user will pass the id and you have to gets it data

const getUserbyIdController=(req,res)=>{
    const id=req.params.id;
    const data=getUserbyId(id)

    res.json({
        message:"succcess",
        data
    })

}

// Create a A user profile edit api --->

const updateUserById=(req,res,next)=>{

    updateData(req.body.name,req.body.age,req.params.id).then(data=>{

    res.json({
        message:"Success",
        data
    })

 }).catch(err=>{
    next(err);
 })

   

}

// You have to write a controller method that updates on the basis of userName and _id

const updateUserByIdAndUserName=(req,res,next)=>{

    updateUserbyIdDbByName(req.params.id,req.body).then(data=>{
   
       res.json({
           message:"Success",
           data
       })
   
    }).catch(err=>{
       next(err);
    })
   
      
   
   }
   
   const deleteByUserById=(req,res,next)=>{

    deleteData(req.params.id).then(data=>{
   
       res.json({
           message:"Success",
           data
       })
   
    }).catch(err=>{
       next(err);
    })
   
      
   
   }

module.exports={
    getUserData,
    getUserbyIdController,
    updateUserById,
    updateUserByIdAndUserName,
    deleteByUserById,
    getUserDataPaginated,
    insertUserData
}