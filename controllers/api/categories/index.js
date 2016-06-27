'use strict';

var CategoriesModel = require('../../../models/categories');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new CategoriesModel();

	router.get('/', isAuthenticated, function (req, res) {
		
		console.log('categories');
		CategoriesModel.find({})
		.populate('subcategories')
		.exec(function(err, categories) {
			if (err)
				res.send(err);
			res.json(categories);
		});

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