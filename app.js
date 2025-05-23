const express = require("express");
const mysql = require("mysql2");

const app = express();

// ket noi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs-login'
})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Mysql connected ...")
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})

app.listen(5001, () => {
    console.log("Server started on port 5001");
})