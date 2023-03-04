const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

})



connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco de dados mais uma vez ${process.env.DB_NAME}`)
})

module.exports = connection

// Se o banco for o mysql pode ser necessário fazer o seguinte processo
/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
*/