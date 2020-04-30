var fs = require('fs');
var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    switch(request.url){
        case '/':
            page = "index.html"; 
            break;
        case '/nodejs':
            page = "info.html";
            break;
        default:
            page = "404.html";
            break;
    }
    fs.readFile("./pages/"+page, function(error, datos){
        response.write(datos);
        response.end();
    });

}).listen(3000, 'localhost');
