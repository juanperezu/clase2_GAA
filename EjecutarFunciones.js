const o = require('./Funciones.js');
let numeros=[2,4,6,8,10];

for(i in numeros){

console.log(o.calcular(numeros[i],2) +  " == "+numeros[i] + " Elevado 2" );

}