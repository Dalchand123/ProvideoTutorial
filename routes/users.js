 const User = require('../models/user');

 const express = require('express');
const router = express.Router();
//const config = require('../config/database/data');

router.post('/register', (req, res, next) => {
  let newUser = new User.User1({
    username: req.body.username,
    password: req.body.password


  })
  User.userSignup(newUser,(err,data)=>
 {
   if(err)
    res.send({success:false,message:'Failed to sign up'});
    else{
    res.send({success:true,message:'Successfully signed up'});
    }
 });
     
});
module.exports = router;