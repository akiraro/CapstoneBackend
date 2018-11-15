const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pathRoutes = require('./API/path');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/path',pathRoutes);

app.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "CAPSTONE PROJECT API IS WORKING!"
    })
})

module.exports = app;