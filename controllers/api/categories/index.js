'use strict';

var CategoriesModel = require('../../../models/categories');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new CategoriesModel();
	/**
	* @api{get} /api/categories
	* @apiName get list of Categories
	* @apiDescription This service provides a list of categories registered in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Categories
	*/
	router.get('/', isAuthenticated, function (req, res) {
		
		console.log('categories');
		CategoriesModel.find({})
		.populate('subcategories')
		.exec(function(err, categories) {
			if (err)
			res.send(err);
		res.json(categories);
	});
	/**
	* @api{post} /api/categories
	* @apiName post a Categories
	* @apiDescription This service creates a new category in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Categories
	*/
}).post('/', isAuthenticated, function(req, res, next){
	model = new CategoriesModel(req.body);
	console.log(model);
	model.save(function (err) {
		if (err) {
			res.send(err);
		} else {
			res.json({message: 'Category Created!'});
		}
	});
});

};