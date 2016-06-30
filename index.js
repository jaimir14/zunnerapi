'use strict';

var express = require('express'),
kraken = require('kraken-js'),
options = require('./lib/spec')(),
User = require('./models/users'),
bcrypt = require('bcryptjs');

var app;

app = module.exports = express();
app.use(kraken(options));
app.use('/apidoc', express.static(__dirname + '/doc'));
app.on('start', function () {
	console.log('Application ready to serve requests.');
	console.log('Environment: %s', app.kraken.get('env:env'));
});
