// server with express
var express = require('express');
var fs = require('fs');
var app = express();

const pug = require('pug');
//definiendo una ruta
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response){
    response.render('index.pug', {
        title: "Test",
        text: "xxx"
    });
});
app.listen(3000, function(){
    console.log('Listening express in the port 3000')
})