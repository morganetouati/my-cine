var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://mongo.arthuramstutz.com:27017/myappdatabase');
var promise = mongoose.createConnection('mongodb://mongo.arthuramstutz.com:27017/myappdatabase');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: String,
	lastName: { type: String, required: true, unique: true },
	pseudo: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	confirmpassword: {type: String, required: true },
	admin: Boolean,
	age : {type: String, required: true },
});

var User = mongoose.model('User', userSchema);

// var user = new User({});

module.exports = User;

User.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
//console.log('Fin de script');