// server with express
var express = require('express');
var fs = require('fs');
var app = express();

const pug = require('pug');
//definiendo una ruta por defecto  /public
app.use(express.static(__dirname + '/public'))
tshirtsList=[
    {color:"orange", image:"images/3.jpeg"},
    {color:"black", image:"images/4.jpeg"},
    {color:"orange", image:"images/5.jpeg"},
    {color:"black", image:"images/6.jpeg"},
    {color:"black", image:"images/7.jpeg"}
]

app.get('/', function(request, response){
    response.render('index.pug', {
        title: "Test",
        text: "We store of shits offer the beter"
    });
});

app.get('/store.html', function(request, response){
    response.render('store.pug',{
        tshirts:tshirtsList
    })
})
app.listen(3000, function(){
    console.log('Listening express in the port 3000')
})