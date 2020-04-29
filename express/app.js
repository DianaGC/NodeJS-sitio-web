var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hola mucndo con express')
})
app.listen(3000, function(){
    console.log('escuchando express en el puerto 3000')
})