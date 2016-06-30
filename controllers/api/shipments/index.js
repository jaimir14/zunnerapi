'use strict';

var ShipmentsModel = require('../../../models/shipments');
var isAuthenticated = require('../../../lib/auth');


module.exports = function (router) {

	var model = new ShipmentsModel();
	/**
	* @api{get} /api/shipments
	* @apiName get list of Shipments
	* @apiDescription This service provides a list of shipments registered in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Shipments
	*/
	router.get('/', isAuthenticated, function (req, res) {
		
		console.log('shipments');
		ShipmentsModel.find({})
		.populate("category")
		.populate("subcategory")
		.populate("user")
		.populate("countries")
		.exec(function(err, shipments) {
			if (err)
			res.send(err);
		res.json(shipments);
	});
	/**
	* @api{post} /api/shipments
	* @apiName post a Shipment
	* @apiDescription This service creates a new Shipment in the database
 	* @apiPermission login
	* @apiUse WrongToken
	* @apiUse NoToken
	* @apiGroup Shipments
	*/
}).post('/', isAuthenticated, function(req, res, next){
	model = new ShipmentsModel(req.body);
	console.log(model);
	model.save(function (err) {
		if (err) {
			res.send(err);
		} else {
			res.json({message: 'Shipment Created!'});
		}
	});
});

};