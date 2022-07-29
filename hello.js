var http = require("http");
var manejador = function(request, response){
    console.log("Hola mundo")
    response.end("Hola mundo. Enviando respuesta al navegador")
}

var servidor = http.createServer(manejador);
servidor.listen(8080);
