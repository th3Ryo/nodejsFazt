const operaciones = {} //array
function sumar (num1,num2) {
    return num1+num2;
}
function restar (num1,num2) {
    return num1-num2;
}
function multiplicar (num1,num2) {
    return num1*num2;
}
function dividir (num1,num2) {
    if (num2 == 0) {
        console.log("indeterminado")
    }
    else {
        return num1/num2;
    }
}

/* console.log(sumar(1,2))
console.log(restar(1,2))
console.log(multiplicar(1,2))
console.log(dividir(1,2)) */

/**  //se exporta con el objeto exports en node es decir exports.sumar = sumar ejemplo
*! se comentata para mostrar de otra forma
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir; 
*/


operaciones.sumar = sumar;
operaciones.restar = restar;
operaciones.multiplicar = multiplicar;
operaciones.dividir = dividir;

/* function hello (nombre){
    console.log("hola", nombre)
} */

module.exports = operaciones;
// exporta tambien funciones constates etc ejemplo
//module.exports = hello;

