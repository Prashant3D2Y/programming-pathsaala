const express = require("express");
const app = require("./app");
// const imageRouter= require('./Routes/imageRouter.js');
// const app = express();
const mongoose = require('mongoose');

// body parsel


// app.use('/api/products', imageRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_password_$@cluster0.rw9cta9.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'TeamProcessing';
const databasePassword = 'team123';
const databaseName = 'KIET-MCA-1stYear';
// const test = require('./models/imageModel.js')

let dbLink = url.replace ("$_USERNAME_$", databaseUser).replace ("$_password_$", databasePassword).replace ("$_DB_NAME_$", databaseName);

 mongoose.connect(dbLink,)
 .then(() => console.log('---------Database Connected ------------'));



app.listen(1400,
() => console.log ('---------App Started ------------'));


