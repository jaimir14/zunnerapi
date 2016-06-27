'use strict';

var UsersModel = require('../models/users');


module.exports = function (router) {

	var model = new UsersModel({name: 'Jairo'});

	router.get('/', function (req, res) {

		res.send( JSON.stringify(model, null, 2));

	});

};
