require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const authRoutes = require('./api/auth');

const app = express();
const HTTP_PORT = 8080;

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, () => console.log(`Connected to DB`));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api/user', authRoutes);


// app.get('/', (req, res)=>{ res.render('main'); });
// app.get('/login', (req, res)=>{ res.render('login'); });
// app.get('/signup', (req, res)=>{ res.render('signup'); });

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
