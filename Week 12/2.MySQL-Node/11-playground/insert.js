var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "mydb"
});

con.connect( (err) =>{
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql,  (err, result)  =>{
        if (err) throw err;
        console.log("1 record inserted");
    });
    con.end();
});