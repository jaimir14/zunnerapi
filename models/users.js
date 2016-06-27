'use strict';


var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcryptjs');



var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true, index: true },
	password: { type: String, required: true, select: true },
	admin: Boolean,
  address1: String,
  address2: String,
  city: String,
  state: String,
  country: String,
  email: String,
  phone: String,
  location: String
}, { timestamps: { createdAt: 'created_at' } });

userSchema.methods.passwordMatches = function (plainText) {
  var user = this;
  return bcrypt.compareSync(plainText, user.password);
}

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;