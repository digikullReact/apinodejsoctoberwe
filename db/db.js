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

    const user=new User(userData);

   return  user.save()  // it will save the user


  

}

const getAllUsers=()=>{
    return USERS;
}

const getUserByUsername=(username)=>{

    return USERS.find(ele=>ele.username==username);

}

const getUserbyId=(id)=>{
    return USERS.find(ele=>ele.id==id);


}

const updateUserbyIdDb=(id,data)=>{
    let filteredAt= USERS.filter(ele=>ele.id!=id);
    data.id=id
    filteredAt.push(data);
    USERS=[...filteredAt]
   return true


}

module.exports={
    getAllUsers,
    getUserByUsername,
    createUser,
    getUserbyId,
    updateUserbyIdDb
}