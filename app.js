// server with express
var express = require('express');
var fs = require('fs');
var app = express();

const pug = require('pug');
//definiendo una ruta por defecto  /public
app.use(express.static(__dirname + '/public'))
tshirtsList=[
    {color:"orange", image:"images/2.jpeg"},
    {color:"grey", image:"images/3.jpeg"},
    {color:"black", image:"images/4.jpeg"},
    {color:"green", image:"images/5.jpeg"},
    {color:"red", image:"images/6.jpeg"},
    {color:"blue", image:"images/7.jpeg"}
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
});

app.get('/store/buy/:color', function(request, response){
    let dataTshirt = tshirtsList.filter(function(item){
        if(request.params.color == item.color){
            console.log('iiiii',item)
            return item
        }
    })[0]
    response.render('details.pug',{
        color:request.params.color,
        datos: dataTshirt
    })

})

app.use(function(request, response){
    let URLError = request.originalUrl
    response.status(400);
    response.render('404.pug',{
        textError: URLError
    });
})
app.listen(3000, function(){
    console.log('Listening express in the port 3000')
})