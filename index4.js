// modulos para archivos modulo hppt
const http = require('http');
const color = require('colors');



const handleServer = function (request, response){
response.writeHead(200,{ "content-type":"text/html" })
response.write("<h1> hola mundo desde nodeJs modificado </h1>")
response.end()
}
//otra forma
/* http.createServer(handleServer).listen(3001) */

const server = http.createServer(handleServer);

server.listen(3001, function () {
    console.log("server on port 3001".red)
})

// forma de crear script personalizados en npm

/**
 * ! npm run desarollo y agregar al package.json 
 * ejemplos para bd expressjs
 */