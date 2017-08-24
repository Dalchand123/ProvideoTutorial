const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const database1 = require('./config/database');
const users = require('./routes/users');

mongoose.connect(database1.database2);

var db = mongoose.connection;
db.on('connected',()=>
{
    console.log('connected to database');
});
db.on('error',()=>{
    console.log('some error in connecting to database');
});

const app = express();
app.use(cors());    
app.use(bodyParser.json());
app.use('/users',users);
app.get('/',(req, res)=>{
    res.send("Invalid endpoint");
});
const port =3000;
app.listen(port, (err) =>{
    if(err)
    console.log("server has some problem");
    else
    console.log("server starts at port 3000");

});