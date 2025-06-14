const express = require("express");
const path = require('path');
// const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const app = express();

// // ket noi database
// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'hbs');

// db.connect((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Mysql connected ...");
//     }
// })

//Define Routes
app.use('/', require('./routes/pages.js'));
app.use('/auth', require('./routes/auth.js'));

// mo cong localhost:5001
app.listen(5001, () => {
    console.log("Server started on port 5001");
})