'use strict';

var SubCategoriesModel = require('../../../models/subcategories');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new SubCategoriesModel();
	/**
	* @api{get} /api/subcategories
	* @apiName get list of Subcategories
	* @apiDescription This service provides a list of Subcategories registered in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Subcategories
	*/
	router.get('/', isAuthenticated, function (req, res) {
		
		console.log('subcategories');
		SubCategoriesModel.find(function(err, subCategories) {
			if (err)
			res.send(err);
		res.json(subCategories);
	});
	/**
	* @api{post} /api/subcategories
	* @apiName post a Subcategory
	* @apiDescription This service creates a new Subcategory in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Subcategories
	*/
}).post('/', isAuthenticated, function(req, res, next){
	model = new SubCategoriesModel(req.body);
	console.log(model);
	model.save(function (err) {
		if (err) {
			res.send(err);
		} else {
			res.json({message: 'Subcategory Created!'});
		}
	});
});

};