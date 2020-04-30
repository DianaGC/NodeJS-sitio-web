// server with express
var express = require('express');
var fs = require('fs');
var app = express();
//definiendo una ruta
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response){
    response.send('hello word with express');
    //response.sendFile('index.html');
});
app.listen(3000, function(){
    console.log('Listening express in the port 3000')
})