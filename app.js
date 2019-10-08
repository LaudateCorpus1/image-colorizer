const express = require('express');
const app = express();
require('dotenv/config');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB,({
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}));

let db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
});

db.once('open',()=>{
    console.log('Hola Amigoes youre now connected to backend bro');
    
});


app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.use(bodyParser.urlencoded({extended:false}));

app.use(expressSession({
    secret:'A keyboard cat',
    saveUninitialized:true,
    resave:true
}));

app.use('/',require('./routes/index'));


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Okay I am On port ${port}`);
});