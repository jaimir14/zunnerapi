 
'use strict';

var UsersModel = require('../../../models/users');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = function (router) {

	router.post('/', function(req, res, next){

		UsersModel.findOne({
			username: req.body.username
		}, function (err, user){
			if (err) {
				throw err;
			} else if (!user) {
				res.status(401).send({success: false, message: 'Authentication failed. User not found'})
			} else if (user) {
				bcrypt.compare(req.body.password,user.password , function(err, authRes) {
					if (!authRes) {
						res.status(401).send({success: false, message: 'Authentication failed. Wrong password'});
					} else {

						var token = jwt.sign(user, req.app.kraken.get("jwt-conf:secret"), {
			            	expiresIn: 86400 // expires in 24 hours
			            });

			            // return the information including token as JSON
			            res.json({
			            	success: true,
			            	message: 'Token created',
			            	token: token
			            });
			        }
			    });
			}
		});
	});

};