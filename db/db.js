// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const { v4: uuidv4 } = require('uuid');
const User=require("./schemas/User");

let  USERS=[]



const _createUser=(userData)=>{


    
    let existing= USERS.find(ele=>ele.username==userData.username);
    if(existing){
     return false;
    }
 
    // Generate a Id for the user 
    userData.id=uuidv4();
    USERS.push(userData)
 
   return  true
 
 }
 

const createUser=(userData)=>{


    // Mongodb query goes here -----

    // save the new user

    // check for the user if it already exists
return new Promise((res,rej)=>{

// Always returns first of the all records (only a single value)
    User.findOne({userName:userData.userName}).then(data=>{
        // data would be null if the record for the above condition is not existing in the db
        if(data){
            rej("UserName Already exists");
        }else{

            const user=new User(userData);

           // it will save the user

           res( user.save() )

        }

     

    }).catch(err=>{
         rej(err);
    })

   

})



  

}

const getAllUsers=()=>{

    // We will get all the users in our collection
   // findOne();
   return  User.find();
}

const _getAllUsers=()=>{
    return USERS;
}

const _getUserByUsername=(username)=>{

    return USERS.find(ele=>ele.username==username);

}

const getUserByUsername=(username)=>{

    return User.findOne({userName:username});

}

const getUserbyId=(id)=>{
    return USERS.find(ele=>ele.id==id);


}

const _updateUserbyIdDb=(id,data)=>{
    let filteredAt= USERS.filter(ele=>ele.id!=id);
    data.id=id
    filteredAt.push(data);
    USERS=[...filteredAt]
   return true


}

const updateUserbyIdDb=(id,data)=>{

    // Update query -->

    return User.updateOne({_id:id},{$set:{...data}})
   

}

const deleteUserbyIdDb=(id)=>{

    // Update query -->

    // find query --

    // insert into another collection deleted collection

    return User.deleteOne({_id:id});  // remove it forver from the db
   

}

const updateUserbyIdDbByName=(id,data)=>{

    // Update query -->

    return User.updateOne({_id:id,name:data.name},{$set:{...data}})
   

}

const paginatedGet=(limit,page,sortField,sortOrder)=>{

    // skip is used to skip the records which are already seen 
    // limit is used to get the number of records per page 

    return User.find().skip(limit*page).limit(limit).sort({[sortField]:sortOrder})

}

module.exports={
    getAllUsers,
    getUserByUsername,
    createUser,
    getUserbyId,
    updateUserbyIdDb,
    updateUserbyIdDbByName,
    deleteUserbyIdDb,
    paginatedGet
}