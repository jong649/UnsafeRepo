// This is a comment in a js file
var http = require('http');
const url = require('url');

var password='mysecretpassword';
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   var q = url.parse(request.url,true).query;
   //console.log(q);
   //console.log(q.hi);
   eval(q.hi);
   // Send the response body as "Hello World"
   response.end(`Hello World password is ${password}`);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
