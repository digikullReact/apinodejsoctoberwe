// We will write all our sql queries---->
const {Createconnection}=require("./mysql");


const insertData=(data)=>{

    // this will insert the data in our db 
    mysqlConnectionObject

}

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
module.exports={
    selectData

}