const mongoose = require('mongoose');
//const config = require('../config/database1');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({

username:{
    type:String
},
password:{

type:String

}
});

 module.exports = {
 User1: mongoose.model('User23', userSchema),
 lala:'lala'
}
module.exports.userSignup= function(newUser,callback)
{
    bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      else{
      newUser.password = hash;
      newUser.save(callback);
     
    }
    });
  });
}