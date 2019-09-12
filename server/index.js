const HTTP_PORT = 8080;
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{ res.render('main'); });
app.get('/login', (req, res)=>{ res.render('login'); });
app.get('/signup', (req, res)=>{ res.render('signup'); });

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
