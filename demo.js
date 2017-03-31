var express = require('express');
var app = express();

//var myLogger = function (req, res, next) {
//  console.log('LOGGED');
//  next();
//};
//
//var myLogger1 = function (req, res, next) {
//  console.log('LOGGED 1')
//  next();
//}
//app.use(myLogger1);
//app.use(myLogger);

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

app.use('/user/:id', function(req, res, next) {
	console.log('Request URL:', req.originalUrl);
	next();
}, function(req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.listen(3000);