'use strict';


var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var shipmentSchema = new Schema({

  pointA: String,
  pointB: String,
  pointC: String,
  country: String,
  estimatedPrice: numeric,
  currency: String,
  country: {
    type: Schema.Types.ObjectId,
    ref:"Countries"
  }
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category" 
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory"
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: { createdAt: 'created_at' } });

var Shipment = mongoose.model('Shipment', shipmentSchema);

// make this available to our users in our Node applications
module.exports = Shipment;