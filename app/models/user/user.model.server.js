module.exports= function(){
  var mongoose = require('mongoose');
  var UserSchema = require("./user.schema.server")();
  var User = mongoose.model("User",UserSchema);

  var api = {
    createUser : createUser,
    findUserById : findUserById,
    findUserByCredentials : findUserByCredentials,
    deleteUser : deleteUser
  };
  return api;

  function createUser(user){
    return User.create(user);
  }

  function findUserById(userId){
    return User.findById(userId);
  }

  function findUserByCredentials(username,password){
    return User.findOne({username:username,password:password});
  }

  function deleteUser(userId){
    return User.remove({_id:userId});
  }
};
