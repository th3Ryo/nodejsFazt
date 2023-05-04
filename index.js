//importar operaciones con la siguiente palabra en node
const hello = require("./operaciones.js");
const operaciones = require("./operaciones.js");
const  calculadora = require("./operaciones.js");
/**
 * ! si lo hacemos asi marca error
    console.log(dividir(1,0));
 */ 
//es requerido exportar el modulo 


/* 
console.log( `esta operacion es fuera del modulo operacion ${calculadora.sumar(1,0)}`);
console.log( `esta operacion es fuera del modulo operacion ${calculadora.restar(1,0)}`);
console.log( `esta operacion es fuera del modulo operacion ${calculadora.multiplicar(1,1)}`);
console.log( `esta operacion es fuera del modulo operacion ${calculadora.dividir(2,1)}`);
console.log( `esta operacion es fuera del modulo operacion ${calculadora.dividir(1,0)}`);
 */

//console para demosotrar que se llega a lo mismo mediante las dos formas de exportar en node

console.log(operaciones)
