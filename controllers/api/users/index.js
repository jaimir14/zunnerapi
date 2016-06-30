'use strict';

var UsersModel = require('../../../models/users');
var bcrypt = require('bcryptjs');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new UsersModel();
	/**
	* @api{get} /api/users
	* @apiName get list of Users
	* @apiDescription This service provides a list of users registered in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Users
	*/
	router.get('/',  function (req, res) {
		
		console.log('users');
		UsersModel.find(function(err, users) {
			if (err)
			res.send(err);
		res.json(users);
	});
	/**
	* @api{post} /api/users
	* @apiName post a User
	* @apiDescription This service creates a new User in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Users
	*/
}).post('/', isAuthenticated, function(req, res, next){
	model = new UsersModel(req.body);
	console.log(model);
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(model.password, salt, function(err, hash) {
			if (err) {
				res.send(err);
			} else {
				model.password = hash;
				model.save(function (err) {
					if (err) {
						res.send(err);
					} else {
						res.json({message: 'User Created!'});
					}
				});
			}
		});
	});
});

};