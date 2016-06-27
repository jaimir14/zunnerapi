'use strict';


var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var countriesSchema = new Schema({

	name: String,
	code: String,
}, { timestamps: { createdAt: 'created_at' } });

var Country = mongoose.model('Country', countriesSchema);

// make this available to our users in our Node applications
module.exports = Country;