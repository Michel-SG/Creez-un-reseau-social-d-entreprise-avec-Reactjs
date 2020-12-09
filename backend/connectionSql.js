const mysql = require("mysql");

// connection to MySql using environment variables from .env file

var mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE, 
    port: process.env.DB_PORT, 
    multipleStatements: true
})

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("Connected to SQL DATABASE !")
    }
    else{
        console.log("Connection to SQL DATABASE failed...")
    }
})

module.exports = mysqlConnection;