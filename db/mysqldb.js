// We will write all our sql queries---->
const {Createconnection}=require("./mysql");



const selectData=()=>{

    return new Promise((resolve,reject)=>{
        const pool=Createconnection();

        pool.getConnection(function(err, conn) {


            console.log(err);

            conn.query(
                'select * from users;',
                function(err, results, fields) {
                 if(err){
                    reject(err)
                 }else{
                    resolve(results)
                 }
                }
              );
            // Do something with the connection
           
            // Don't forget to release the connection when finished!
            pool.releaseConnection(conn);
         })
           
    
    })
  
  
   
     

  
    
}

const insertData=(name,age)=>{

    return new Promise((resolve,reject)=>{
        const pool=Createconnection();

        pool.getConnection(function(err, conn) {


            console.log(err);

            conn.query(
                "INSERT INTO users ( `name`,`age`) VALUES (?,?)",[name,age],
                function(err, results, fields) {
                 if(err){
                    reject(err)
                 }else{
                    resolve(results)
                 }
                }
              );
            // Do something with the connection
           
            // Don't forget to release the connection when finished!
            pool.releaseConnection(conn);
         })
           
    
    })
  
  
   
     

  
    
}

const updateData=(name,age,id)=>{

    return new Promise((resolve,reject)=>{
        const pool=Createconnection();

        pool.getConnection(function(err, conn) {


            console.log(err);

            conn.query(
                "Update users set age=?,name=? where id=?;",[age,name,id],
                function(err, results, fields) {
                 if(err){
                    reject(err)
                 }else{
                    resolve(results)
                 }
                }
              );
            // Do something with the connection
           
            // Don't forget to release the connection when finished!
            pool.releaseConnection(conn);
         })
           
    
    })
  
}


const deleteData=(id)=>{

    return new Promise((resolve,reject)=>{
        const pool=Createconnection();

        pool.getConnection(function(err, conn) {


            console.log(err);

            conn.query(
                "DELETE from users where id=?;",[id],
                function(err, results, fields) {
                 if(err){
                    reject(err)
                 }else{
                    resolve(results)
                 }
                }
              );
            // Do something with the connection
           
            // Don't forget to release the connection when finished!
            pool.releaseConnection(conn);
         })
           
    
    })
  
}


// write a delete method using the above case and delete the data --->
module.exports={
    selectData,
    insertData,
    updateData,
    deleteData

}