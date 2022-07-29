var http = require("http");
var fs = require("fs");

//programación síncrona
/*var html = fs.readFileSync("./index.html");
http.createServer(function(req, res){
    res.write(html);
    res.end();
    
    }).listen(8080);*/

//programación asíncrona
    http.createServer(function(req, res){
        fs.readFile("./index.html", function(err, html){
            res.writeHead(200,{"Content-Type":"application/json"});//Enviando información de encabezado
            res.write(/*html*/JSON.stringify({nombre:"Yesenia", username:"Yese", color: "Azul"}));
            res.end();
        })
    }).listen(8080);

