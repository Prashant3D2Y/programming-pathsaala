const mongoose = require('mongoose');
const app = require('./app.js');
const dbDataUpload = require('./configs/db_data.js')


const test = require("./models/reviewModel.js")

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.rw9cta9.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'TeamProcessing';
const databasePassword = 'team123';
const databaseName = 'Amazon-Backend-2';

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink).then(() => {
  console.log('-------- Database Connected --------');
  // dbDataUpload();
});

app.listen(2000,() => {
    console.log('----------- App Started -----------')
});