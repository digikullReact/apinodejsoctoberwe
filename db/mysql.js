// We will do all the mysql connection here ----->

//const mysql = require('mysql2/promise');
const { resource } = require('../app');
let pool;

const mysql = require('mysql2');



const Createconnection=()=>{

const pool=mysql.createPool({
  host: 'mysql-3ca6f9a1-shubhamdixit863-a24d.aivencloud.com',
  user: 'avnadmin',
  port:"14287",
  password:'AVNS_ZT_X586MDd1cQPJueei',
  database: 'defaultdb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});
return pool ;

}


/*
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
    
           // console.log(mysqlConnectionObject);
          }).catch(err=>{
             rej(err);
          })

    })
    


}
*/


module.exports={
    Createconnection,
    pool
}