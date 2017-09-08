var http = require('http');
http.createServer(function (req, res) {

helloHttp(req, res);





}).listen(8080);
console.log('Server running at http://localhost:8080/');

function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};
