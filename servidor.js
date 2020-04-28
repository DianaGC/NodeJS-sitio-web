var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("Martes");
    response.end();

}).listen(3000, 'localhost');

console.log('El servidor se muestra en http://localhost:3000')