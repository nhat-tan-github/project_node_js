const express = require("express");
const path = require('path');
const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const app = express();

// ket noi database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Mysql connected ...");
    }
})

//Home
app.get("/", (req, res) => {
    // res.send("<h1>Home Page</h1>");
    res.render("index");
})

//Register
app.get("/register", (req, res) => {
    res.render("register");
})

app.listen(5001, () => {
    console.log("Server started on port 5001");
})