var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

require('./server/routes.js')(app);

app.listen(7777, function(){
	console.log('now listening on port 7777');
})
