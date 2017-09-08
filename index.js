    var http = require('http');
var fs = require('fs');
var connect = require('connect');
var express = require('express');

var app = express();
app.get('/', function(req, res  ) {
	response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
	res.send(JSON.stringify({ "speech": response, "displayText": response 
	//"speech" is the spoken version of the response, "displayText" is the visual version
  	}));
    });

var server = app.listen(8888, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);
    });
