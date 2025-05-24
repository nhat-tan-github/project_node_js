const express = require('express');
const router = express.Router();

//Home
router.get('/', (req, res) => {
    res.render('index');
});

//Register
router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;