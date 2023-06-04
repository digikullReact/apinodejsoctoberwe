// We will do all the mysql connection here ----->

const mysql = require('mysql2/promise');
const { resource } = require('../app');
let mysqlConnectionObject;

const Createconnection=()=>{

    return new Promise((res,rej)=>{
        mysql.createConnection({
            host: 'mysql-3ca6f9a1-shubhamdixit863-a24d.aivencloud.com',
            port:"14287",
            user: 'avnadmin',
            password:'AVNS_ZT_X586MDd1cQPJueei',
            database: 'defaultdb'
          }).then(connection=>{
            res("all good");
            mysqlConnectionObject=connection
    
          }).catch(err=>{
             rej(err);
          })

    })
    


}


module.exports={
    Createconnection,
    mysqlConnectionObject
}