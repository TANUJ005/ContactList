const mongoose = require('mongoose');

//connect to database

mongoose.connect('mongodb://127.0.0.1/contact_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error with database connection'));

db.once('open' , function(){
    console.log("Successfully connected to database");
});