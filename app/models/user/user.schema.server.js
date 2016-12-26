module.exports= function(){
  var mongoose = require('mongoose');

  var UserSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    dob: Date,
    dateCreated: {type: Date, default: Date.now}
  });
  return UserSchema;
};