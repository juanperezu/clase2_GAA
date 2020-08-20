function calcular(x,n){
let respuesta =Math.pow(x,n);

return respuesta;
// return Math.pow(x,n);
}
console.log(calcular(2,5));
exports.calcular=calcular;