var http = require("http");
var manejador = (request, response) => {//function(request, response){//probando otra notación de callbacks, arrow, ...
    console.log("Hola mundo")
    response.end("Hola mundo. Enviando respuesta al navegador")
}

var servidor = http.createServer(manejador);
servidor.listen(8080);
