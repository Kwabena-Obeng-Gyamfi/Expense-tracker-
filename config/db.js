const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
    
const mysql = require('mysql2');

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

const pool = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.connect((err)=>{

    if(err){
        console.log("yawa" + err.stack);
        return;
    }else{
        console.log("Database connected successfully");
        return;
    }
}

);

module.exports = pool;