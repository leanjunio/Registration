const HTTP_PORT = 8080;
require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

function OnHttpStart(){
    console.log("Listening on port " + HTTP_PORT);
}

app.set('views',path.join(__dirname,"views"))
app.set("view engine", "hbs");

app.get('/', (req, res)=>{ res.render('main'); });
app.get('/login', (req, res)=>{ res.render('login'); });
app.get('/signup', (req, res)=>{ res.render('signup'); });

app.listen(HTTP_PORT, OnHttpStart);
