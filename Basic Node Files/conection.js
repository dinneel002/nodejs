var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'localhost',
    username:'root',
    password:'password'
})

conn.connect(function(err){
    if (err) throw err;
    console.log('You are now connected to mysql')
})