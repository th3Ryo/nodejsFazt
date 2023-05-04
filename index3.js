// modulos para archivos modulos  file system
//crear archivos en el sistema ejemplo crear archivos nuevos
const fs = require('fs');

/* fs.writeFile("./texto.txt","linea uno",function (err){
    if(err){
        console.log(err);
    }
    console.log("archivo creado")
})

console.log("ultima linea de codigo") */

//otro ejemplo

fs.readFile("./texto.txt", function (err, data){
    if (err) {
        console.log(err);
    };
    console.log(data.toString());
})