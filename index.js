const express = require('express');
require('dotenv').config()
const app = express();
const db = require('./queries')


app.get('/', (req,res) => {
    res.json({test:"test"});
});

app.get('/users', db.getUsers)

app.listen(3001, () => {
    console.log('app running 3001');
});