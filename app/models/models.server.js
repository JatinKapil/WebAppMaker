module.exports= function(){

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/WebAppMaker');

  var models = {
    userModel: require("./user/user.model.server")()
    // Add all the other models.
  };
  return models;
};
