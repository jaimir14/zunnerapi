 
'use strict';

var UsersModel = require('../../../models/users');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
/**
 * @apiDefine login User access only
 * Is required to be logged in to use this service, and provide the token
 */

/**
 * @apiDefine WrongPassword Authentication fails
 * @apiError (auth) {Boolean} success false because the authentication was not successful
 * @apiError (auth) {String} message Authentication failed. Wrong password 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Auth failed
 *     {
 *       "success": "false",
 *		 "message": "Authentication failed. Wrong password"
 *     }
 */

/**
 * @apiDefine NoToken Authentication fails
 * @apiError (auth) {Boolean} success false because the authentication was not successful
 * @apiError (auth) {String} message No token provided
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Auth failed
 *     {
 *       "success": "false",
 *		 "message": "No token provided"
 *     }
 */

/**
 * @apiDefine WrongToken Authentication fails
 * @apiError (auth) {Boolean} success false because the authentication was not successful
 * @apiError (auth) {String} message Failed to athenticate token
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Auth failed
 *     {
 *       "success": "false",
 *		 "message": "Failed to athenticate token"
 *     }
 */
 module.exports = function (router) {

	/**
	* @api{post} /api/auth
	* @apiName authenticate User
	* @apiDescription This service provides a token in order to be used in all service calls that require authentication
	* @apiParam {String} username user identification
	* @apiParam {String} password user password
	* @apiExample Example usage:
	*     endpoint: api/auth
	*
	*     body:
	*     {
	*       "username": "admin",
	*       "password": "pass123"
	*     }
	* @apiSuccess (200) {boolean} success true if the authentication was successful
	* @apiSuccess (200) {String} message shows the success message
	* @apiSuccess (200) {String} token identifies the actual session in the server
	* @apiSuccessExample {json} Success-Response:
	*     HTTP/1.1 200 OK
	*     {
	*		"success": true
	*		"message": "Token created"
	*		"token": "token-string-here"
	*     }
	* @apiGroup Authentication
	* @apiUse WrongPassword
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiVersion 0.1.0
	*/
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
						res.status(403).send({success: false, message: 'Authentication failed. Wrong password'});
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