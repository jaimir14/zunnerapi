'use strict';


var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var subCategoriesSchema = new Schema({

	name: String,
	description: String
}, { timestamps: { createdAt: 'created_at' } });

var SubCategory = mongoose.model('SubCategory', subCategoriesSchema);

// make this available to our users in our Node applications
module.exports = SubCategory;