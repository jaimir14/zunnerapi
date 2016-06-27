'use strict';

var SubCategoriesModel = require('../../../models/subcategories');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new SubCategoriesModel();

	router.get('/', isAuthenticated, function (req, res) {
		
		console.log('subcategories');
		SubCategoriesModel.find(function(err, subCategories) {
			if (err)
				res.send(err);
			res.json(subCategories);
		});

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