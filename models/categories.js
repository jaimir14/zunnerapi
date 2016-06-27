'use strict';


var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var categoriesSchema = new Schema({

  name: String,
  description: String,
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory" //Edit: I'd put the schema. Silly me.
  }]
}, { timestamps: { createdAt: 'created_at' } });

var Category = mongoose.model('Category', categoriesSchema);

// make this available to our users in our Node applications
module.exports = Category;